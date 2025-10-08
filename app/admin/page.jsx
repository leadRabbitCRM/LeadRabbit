"use client";
import { CubeTransparentIcon, ClockIcon, CubeIcon, DocumentCheckIcon,ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import Widget from "./components/widget";
import TaskTable from './components/taskTable';

export default function page() {
  return (
    <div>
      <div className="bg-[url('/gradient.jpg')] bg-cover bg-center pb-[3rem]">
        <div className="flex items-center gap-2 p-5 ">
          <ClipboardDocumentCheckIcon className="w-10 text-white" />
          <p className="font-extrabold text-xl text-white">All Tikets</p>
        </div>
        <div className='md:flex md:gap-5 md:justify-center max-md:grid grid-cols-2 gap-3 max-md:mx-3'>
          <Widget icon={<CubeTransparentIcon className='w-10 text-white max-md:w-7' />} count={"12.1k"} name={"Total Tickets"}></Widget>
          <Widget icon={<CubeIcon className='w-10 text-white max-md:w-7' />} count={"2.1k"} name={"Total Open Tickets"}></Widget>
          <Widget icon={<ClockIcon className='w-10 text-white max-md:w-7' />} count={"5.1k"} name={"Total In Progress Tickets"}></Widget>
          <Widget icon={<DocumentCheckIcon className='w-10 text-white max-md:w-7' />} count={"10.1k"} name={"Total Closed Tickets"}></Widget>
        </div>
      </div>
      <div className="md:px-10 pt-[2rem] px-3">
        <TaskTable />
      </div>
    </div>
  )
}
