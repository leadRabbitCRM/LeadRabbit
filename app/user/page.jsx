"use client"
import Leads from "./components/leads"
import { CubeTransparentIcon, ClockIcon, CubeIcon, DocumentCheckIcon } from '@heroicons/react/24/outline'
import Widget from "./components/widget";

export default function page() {
  return (
    <div className="min-h-screen bg-[#e8e8e8]">
        <div className='grid grid-cols-2 gap-3  p-5'>
          <Widget icon={<CubeTransparentIcon className='w-10 text-black max-md:w-7' />} count={"12.1K"} name={"Leads"}></Widget>
          <Widget icon={<CubeIcon className='w-10 text-black max-md:w-7' />} count={"2.1K"} name={"New Leads"}></Widget>
          <Widget icon={<ClockIcon className='w-10 text-black max-md:w-7' />} count={"5.1K"} name={"InProgress Leads"}></Widget>
          <Widget icon={<DocumentCheckIcon className='w-10 text-black max-md:w-7' />} count={"10.1K"} name={"Closed Leads"}></Widget>
        </div>

      <div className="md:px-10 pt-2 px-3">
        <Leads />
      </div>
    </div>
  )
}
