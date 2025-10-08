import React from 'react'
import { Chip } from "@heroui/react";
import { CheckBadgeIcon, FireIcon } from "@heroicons/react/24/solid";
import { FaUserClock } from "react-icons/fa6";

export default function Status({status}) {
  return (
    <>
    { status === "New" ? <Chip color="secondary" startContent={<FireIcon className="w-5" />} variant="solid" className="text-xs" size="sm">
    {status}
  </Chip> : status === "InProgress" ? <Chip color="warning" startContent={<FaUserClock className="text-xl ml-1" />} variant="solid" className="text-xs" size="sm" >{status}</Chip> : status === "Deal" ? <Chip color="success" startContent={<CheckBadgeIcon className="w-5" />} variant="solid" className="text-xs" size="sm">{status}</Chip> : null}
  </>
  )
}
