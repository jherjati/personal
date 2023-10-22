"use client";

import * as React from "react";
import { Map } from "maplibre-gl";

interface SpatialProps {}

const Spatial: React.FunctionComponent<SpatialProps> = () => {
  const mapRef = React.useRef<Map>();

  React.useEffect(() => {
    if (!mapRef.current) {
      const mapElement = document.getElementById("map")!;
      const map = new Map({
        container: mapElement,
        style:
          "https://api.maptiler.com/maps/basic-v2-dark/style.json?key=W3KZt4R5y50GlXj6hTO5",
        center: [-87.61694, 41.86625],
        zoom: 15.99,
        pitch: 40,
        bearing: 20,
        antialias: true,
      });
      mapRef.current = map;

      let animationFrameId: number | null;
      let isPausing = false;
      const rotateCamera = (timestamp: DOMHighResTimeStamp) => {
        if (isPausing) {
          animationFrameId = null;
          return;
        }
        map.rotateTo((timestamp / 100) % 360, { duration: 0 });
        animationFrameId = requestAnimationFrame(rotateCamera);
      };

      map.on("load", () => {
        rotateCamera(0);
        map.addSource("floorplan", {
          // GeoJSON Data source used in vector tiles, documented at
          // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
          type: "geojson",
          data: "https://maplibre.org/maplibre-gl-js/docs/assets/indoor-3d-map.geojson",
        });
        map.addLayer({
          id: "room-extrusion",
          type: "fill-extrusion",
          source: "floorplan",
          paint: {
            // See the MapLibre Style Specification for details on data expressions.
            // https://maplibre.org/maplibre-style-spec/expressions/

            // Get the fill-extrusion-color from the source 'color' property.
            "fill-extrusion-color": ["get", "color"],

            // Get fill-extrusion-height from the source 'height' property.
            "fill-extrusion-height": ["get", "height"],

            // Get fill-extrusion-base from the source 'base_height' property.
            "fill-extrusion-base": ["get", "base_height"],

            // Make extrusions slightly opaque for see through indoor walls.
            "fill-extrusion-opacity": 0.5,
          },
        });

        // mapElement.addEventListener("mouseenter", () => {
        //   console.log("pause");
        //   cancelAnimationFrame(animationFrameId!);
        //   isPausing = true;
        // });

        // mapElement.addEventListener("mouseleave", () => {
        //   console.log("resume");
        //   isPausing = false;
        //   rotateCamera(0);
        // });
      });
    }
  }, []);

  return (
    <aside className='relative row-start-2 md:row-start-1'>
      <div
        id='map'
        style={{ height: "50vh" }}
        className='w-full relative md:rounded-r-lg  md:rounded-l-none overflow-hidden'
      ></div>
    </aside>
  );
};

export default Spatial;
