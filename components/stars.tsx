import * as React from "react";
import "./stars.css";

interface IStarsProps {}

const myStars = Array.from({ length: 100 }).map((_, i) => {
  const xposition = Math.random();
  const yposition = Math.random();
  const starType = Math.floor(Math.random() * 3 + 1);
  const position = {
    x: 100 * xposition,
    y: 100 * yposition,
  };

  return { starType, position };
});

const Stars: React.FunctionComponent<IStarsProps> = () => {
  return (
    <>
      <div className='galaxy'>
        {myStars.map(({ starType, position }, i) => {
          return (
            <div
              key={i}
              style={{ top: position.y + "%", left: position.x + "%" }}
              className={`star star-type${starType}`}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default Stars;
