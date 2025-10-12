"use client"
import { BoltSlashIcon, BoltIcon,UserGroupIcon } from '@heroicons/react/24/solid'
import Widget from "../components/widget";
import EmpTable from './components/empTable';

export default function page() {
  return (
    <div>
      <div className="bg-[url('/gradient.jpg')] bg-cover bg-center pb-[3rem]">
        <div className="flex items-center gap-2 p-5 ">
          <UserGroupIcon className="w-10 text-white" />
          <p className="font-extrabold text-xl text-white">Employees Details</p>
        </div>
        <div className='md:flex md:gap-5 md:justify-center max-md:grid grid-cols-2 gap-3 max-md:mx-3 '>
          <Widget icon={<BoltIcon className='w-10 text-white max-md:w-7' />} count={"3"} name={"Total Active Users"} color={"text-green-500"}></Widget>
          <Widget icon={<BoltSlashIcon className='w-10 text-white max-md:w-7' />} count={"8"} name={"Total InActive Users"} color={"text-danger-600"}></Widget>
        </div>
      </div>
      <div className="md:px-10 pt-[2rem] px-3">
        <EmpTable />
      </div>
    </div>
  )
}
