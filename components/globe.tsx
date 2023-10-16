"use client";

import createGlobe from "cobe";
import { LegacyRef, useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    let phi = 0;
    const globe = createGlobe(canvasRef.current as HTMLCanvasElement, {
      devicePixelRatio: 2,
      width: 384 * 2,
      height: 384 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [-6.1944, 106.8229], size: 0.1 }, // Jakarta
        { location: [35.6764, 139.65], size: 0.05 }, // Tokyo
        { location: [24.5247, 39.5692], size: 0.05 }, // Madinah
        { location: [37.7749, -122.4194], size: 0.05 }, // San Fransisco
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <aside style={{ zIndex: 1 }}>
      <canvas
        ref={canvasRef as LegacyRef<HTMLCanvasElement>}
        className='aspect-square h-96 w-96 max-w-full mx-auto'
      />
    </aside>
  );
}
