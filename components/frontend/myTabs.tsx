"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import {
  TiChartBarOutline,
  TiChartLineOutline,
  TiChartPieOutline,
} from "react-icons/ti";

export default function MyTabs() {
  return (
    <div className='flex w-full flex-col'>
      <Tabs aria-label='Options' color='primary' variant='bordered'>
        <Tab
          key='photos'
          title={
            <div className='flex items-center space-x-2'>
              <TiChartBarOutline className='w-5 h-5' />
              <span>Bar</span>
            </div>
          }
        />
        <Tab
          key='music'
          title={
            <div className='flex items-center space-x-2'>
              <TiChartLineOutline className='w-5 h-5' />
              <span>Line</span>
            </div>
          }
        />
        <Tab
          key='videos'
          title={
            <div className='flex items-center space-x-2'>
              <TiChartPieOutline className='w-5 h-5' />
              <span>Pie</span>
            </div>
          }
        />
      </Tabs>
    </div>
  );
}
