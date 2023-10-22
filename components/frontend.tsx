import * as React from "react";
import Zoey from "./frontend/zoey";
import Blurred from "./frontend/blurred";
import MyTable from "./frontend/myTable";
import MyTabs from "./frontend/myTabs";

interface IFrontendProps {}

const Frontend: React.FunctionComponent<IFrontendProps> = () => {
  return (
    <aside className='relative row-start-2 md:row-start-1 min-h-[24rem] md:min-h-fit'>
      <div className='absolute right-[5%] top-[15%] animate-[levitate_15s_ease_infinite_1s_reverse]'>
        <MyTabs />
      </div>
      <div className='absolute left-[3%] top-[10%] md:top-[2%] animate-[levitate_10s_ease_infinite]'>
        <Zoey />
      </div>
      <div className='absolute left-[5%] bottom-[20%] animate-[levitate_20s_ease_infinite] '>
        <MyTable />
      </div>
      <div className='absolute right-[10%] bottom-[20%] animate-[levitate_25s_ease_infinite_1s_reverse]'>
        <Blurred />
      </div>
    </aside>
  );
};

export default Frontend;
