"use client";

import * as React from "react";
import "./stars.css";

interface IStarsProps {}

const Stars: React.FunctionComponent<IStarsProps> = (props) => {
  const galaxy = React.useRef<HTMLDivElement>();

  return (
    <>
      <div className='galaxy' ref={galaxy as React.LegacyRef<HTMLDivElement>}>
        {Array.from({ length: 50 }).map((_, i) => {
          const xposition = Math.random();
          const yposition = Math.random();
          const starType = Math.floor(Math.random() * 3 + 1);
          const position = {
            x: 1000 * xposition,
            y: 500 * yposition,
          };
          return (
            <div
              key={i}
              style={{ top: position.y + "px", left: position.x + "px" }}
              className={`star star-type${starType}`}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Stars;
