import { Chip } from '@heroui/react';
import { CheckBadgeIcon, FireIcon } from "@heroicons/react/24/solid";
import { FaUserClock } from "react-icons/fa6";
import { SiHomebridge } from "react-icons/si";
import StatusChip from './StatusChip';

export default function LeadDetailNameCard({lead}) {
    const statusStickers = {
    New: { src: "/img/stickers/plantAsset2.svg", size: "w-10", left: "right-1 bottom-1" },
    InProgress: { src: "/img/stickers/plantAsset3.svg", size: "w-12", left: "right-1 bottom-1" },
    Deal: { src: "/img/stickers/plantAsset4.svg", size: "w-12", left: "right-1 bottom-1" },
  };
  const sticker = statusStickers[lead.status];
    return (
        <div className="relative">
            <div className="max-w-md p-6 rounded-2xl bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] items-center relative mb-2">
                {/* Name */}
                <div className=" mb-3 flex justify-end bg-gray-900 rounded-2xl pr-10 ">
                    <h1 className="text-2xl font-bold text-gray-400 ">{lead.name}</h1>
                </div>

                {/* Info List */}
                <div className="flex flex-col items-end">
                    <div className="space-y-2 text-sm">
                        {/* Email */}
                        <div className="flex items-center">
                            <span className="font-semibold w-16 text-slate-600">Email:</span>
                            <span className="truncate text-slate-800">{lead.email}</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center">
                            <span className="font-semibold w-16 text-slate-600">Phone:</span>
                            <span className="text-slate-800">{lead.phone}</span>
                        </div>

                        {/* Status */}
                        <div className="flex items-center">
                            <span className="font-semibold w-16 text-slate-600">Status:</span>
                            <div className="flex scale-85">
                                <StatusChip status={lead.status}/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* project details */}
                <div className="flex flex-col pt-3">
                    <div className='flex px-5 justify-between items-center bg-gray-900 rounded-2xl py-1'>
                    <h1 className='font-semibold text-slate-100'>Project Details</h1>
                    <SiHomebridge className='text-slate-100 text-2xl'/>
                    </div>
                    <div className="space-y-1 text-sm pt-2">
                        {/* Email */}
                        <div className="flex items-center">
                            <span className="font-semibold w-16 text-slate-600">Name:</span>
                            <span className="truncate text-slate-800 text-xs font-bold">{lead?.project}</span>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start">
                            <span className="font-semibold w-16 text-slate-600 flex items-start justify-start">Location:</span>
                            <span className="text-slate-800 text-xs pl-2">{lead.projectLocation}</span>
                        </div>
                    </div>
                </div>

            </div>
            <img src="/icons/profile.png" alt="" className="absolute z-10 w-[8rem] -top-6 left-5 " />

            {/* Status Sticker */}
      {sticker && (
        <div
          className={`absolute ${sticker.left} cursor-pointer`}
        >
          <img src={sticker.src} alt={`${lead.status} sticker`} className={sticker.size} />
        </div>
      )}
        </div>
    )
}
