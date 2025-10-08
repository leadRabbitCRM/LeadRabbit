import { Accordion, AccordionItem, Button } from "@heroui/react";
import CalendarCard from "./CalendarCard";
import { HiCalendarDateRange } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendarXFill } from "react-icons/bs";
import { MdEditCalendar } from "react-icons/md";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function App() {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  }

  return (
    <div>
      <div className="pb-2 flex items-center justify-between">
        <h1 className="font-bold text-md py-2 text-gray-700 flex items-center gap-2"><CalendarDaysIcon className="w-5" /> Meeting Details</h1>

        <button
          className="bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] items-center relative p-2 px-3 rounded-[12px] flex gap-2 text-xs">
          <PlusIcon className="w-4" /> Create Meeting
        </button>

      </div>
      <Accordion
        className="p-2 flex flex-col gap-3 w-full bg-gray-900"
        itemClasses={itemClasses}
        showDivider={false}
        variant="shadow"
      >
        <AccordionItem
          key="1"
          aria-label="Location Visiting"
          startContent={
            <CalendarCard month="June" date={17} className="text-primary" />
          }
          title={
            <div className="flex flex-col">
              <span className="font-semibold text-gray-100">Location Visiting</span>
              <span className="text-xs text-gray-200">
                17-06-2024 | 10:00 AM - 11:00 AM
              </span>
            </div>
          }
        >
          <div className="space-y-1">
            <div className="flex flex-col gap-2 pb-3">
              <div className="flex items-center gap-2">
                <HiCalendarDateRange className="text-3xl text-white" />
                <p className="text-gray-50 text-xs">17-06-2024 | 10:00 AM - 11:00 AM</p>
              </div>
              <div className="flex items-center gap-2 pl-1">
                <FaLocationDot className="text-3xl text-white" />
                <p className="text-gray-50 text-xs">Kannada Sahithya Parishath Rd, III Stage, Gokulam, Mysuru, Karnataka 570002</p>
              </div>
            </div>

            <div className="flex gap-2 pb-2">
              <Button color="primary" variant="solid" startContent={<MdEditCalendar className="text-xl" />}>Reschedule event</Button>
              <Button className="" color="danger" variant="solid" startContent={<BsFillCalendarXFill className="text-xl" />}>Cancel event</Button>
            </div>
            <p className="text-sm text-gray-200 font-medium">About This Event</p>
            <p className="text-xs text-white leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Client Meeting"
          startContent={
            <CalendarCard month="June" date={20} className="text-primary" />
          }
          title={
            <div className="flex flex-col">
              <span className="font-semibold text-gray-100">Client Meeting</span>
              <span className="text-xs text-gray-200">
                20-06-2024 | 02:00 PM - 03:00 PM
              </span>
            </div>
          }
        >
          <div className="space-y-1">
            <p className="text-sm text-gray-400 font-medium">Description</p>
            <p className="text-xs text-gray-200 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </AccordionItem>

      </Accordion>
    </div>
  );
}
