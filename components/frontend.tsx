import * as React from "react";
import Zoey from "./frontend/zoey";
import Blurred from "./frontend/blurred";

interface IFrontendProps {}

const Frontend: React.FunctionComponent<IFrontendProps> = (props) => {
  return (
    <aside className='relative'>
      <div className='absolute left-0 animate-[levitate_10s_ease_infinite] '>
        <Zoey />
      </div>
      <div className='absolute left-56 bottom-56 animate-[levitate_13s_ease_infinite_1s_reverse]'>
        <Blurred />
      </div>
    </aside>
  );
};

export default Frontend;
