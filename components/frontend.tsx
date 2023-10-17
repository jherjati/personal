import * as React from "react";
import Zoey from "./frontend/zoey";
import Blurred from "./frontend/blurred";
import MyTable from "./frontend/myTable";
import MyTabs from "./frontend/myTabs";

interface IFrontendProps {}

const Frontend: React.FunctionComponent<IFrontendProps> = (props) => {
  return (
    <aside className='relative'>
      <div className='absolute left-6 bottom-24 animate-[levitate_15s_ease_infinite] '>
        <MyTable />
      </div>
      <div className='absolute right-6 bottom-20 animate-[levitate_13s_ease_infinite_1s_reverse]'>
        <Blurred />
      </div>
      <div className='absolute right-0 top-16 animate-[levitate_10s_ease_infinite_1s_reverse]'>
        <MyTabs />
      </div>
      <div className='absolute left-0 animate-[levitate_10s_ease_infinite] top-6'>
        <Zoey />
      </div>
    </aside>
  );
};

export default Frontend;
