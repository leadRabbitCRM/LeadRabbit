import React from "react";
import CustomButton from "./ui/CustomButton";
import StatusChip from "./ui/StatusChip";

export default function CustomCard({ lead, onOpen }) {
  // Sticker mapping by status
  const statusStickers = {
    New: { src: "/img/stickers/plantAsset2.svg", size: "w-10", left: "right-5 bottom-1" },
    InProgress: { src: "/img/stickers/plantAsset3.svg", size: "w-14", left: "right-2 bottom-1" },
    Deal: { src: "/img/stickers/plantAsset4.svg", size: "w-16", left: "right-2 bottom-1" },
  };

  const sticker = statusStickers[lead.status];

  
  return (
    <div className="flex gap-6 items-center relative">
      {/* Action Button */}
      <div className="absolute top-1 right-1 z-10">
        <div className="bg-primary-200 p-2 rounded-full shadow-md">
          <CustomButton />
        </div>
      </div>

      {/* Main Card */}
      <div
        className="w-full flex rounded-2xl bg-[#c9d5e0] [transform-style:preserve-3d] 
                   mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),
                   inset_4px_4px_3px_rgba(255,255,255,0.75),
                   -4px_-4px_8px_rgba(255,255,255,0.55),
                   inset_-1px_-1px_3px_rgba(0,0,0,0.2)] 
                   relative cursor-pointer"
        onClick={onOpen}
        role="button"
        tabIndex={0}
      >
        <div className="p-4 w-full pl-30 space-y-2">
          {/* Name */}
          <div className="flex items-center rounded-full bg-white">
            <h2 className="text-md font-bold text-gray-900 pl-2">{lead.name}</h2>
            <div className="scale-80 flex">
              <StatusChip status={lead.status}/>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-1 text-xs leading-relaxed shadow-2xl bg-white p-3 rounded-lg ">
            <p>
              <span className="text-gray-800 font-bold">Email: </span>
              <span className="text-gray-800">{lead.email}</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Phone: </span>
              <span className="text-gray-800">{lead.phone}</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Status: </span>
              <span className="text-gray-800">{lead.status}</span>
            </p>
            <p>
              <span className="text-gray-800 font-bold">Project: </span>
              <span className="text-gray-800">{lead.project || "Unassigned"}</span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-[6.5rem] absolute left-2`}
        onClick={onOpen}
        role="button"
        tabIndex={0}
      >
        <img src="/img/stickers/ticketIcon.svg" alt={`${lead.status} sticker`} className={``} />
      </div>
      {/* Status Sticker */}
      {sticker && (
        <div
          className={`absolute ${sticker.left} cursor-pointer`}
          onClick={onOpen}
          role="button"
          tabIndex={0}
        >
          <img src={sticker.src} alt={`${lead.status} sticker`} className={sticker.size} />
        </div>
      )}
    </div>
  );
}
