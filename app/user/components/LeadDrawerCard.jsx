import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Button,
    Tooltip,
    Avatar,
    AvatarGroup,
    Select,
    SelectItem,
    Chip,
} from "@heroui/react";
import { MegaphoneIcon, PhoneIcon, PlusIcon } from "@heroicons/react/24/solid";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import LeadMeetingDetalsTable from "./ui/LeadMeetingDetalsTable";
import LeadDetailNameCard from "./ui/LeadDetailNameCard";
import LeadHistoryTable from "./ui/LeadHistoryTable";
import StatusChip from "./ui/StatusChip";

export const users = [
    {
        id: 1,
        name: "Tony Reichert",
        role: "CEO",
        team: "Management",
        status: "active",
        age: "29",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
        email: "tony.reichert@example.com",
    },
    {
        id: 2,
        name: "Zoey Lang",
        role: "Tech Lead",
        team: "Development",
        status: "paused",
        age: "25",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
        email: "zoey.lang@example.com",
    },
    {
        id: 3,
        name: "Jane Fisher",
        role: "Sr. Dev",
        team: "Development",
        status: "active",
        age: "22",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png",
        email: "jane.fisher@example.com",
    },
    {
        id: 4,
        name: "William Howard",
        role: "C.M.",
        team: "Marketing",
        status: "vacation",
        age: "28",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png",
        email: "william.howard@example.com",
    },
    {
        id: 5,
        name: "Kristen Copper",
        role: "S. Manager",
        team: "Sales",
        status: "active",
        age: "24",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png",
        email: "kristen.cooper@example.com",
    },
    {
        id: 6,
        name: "Brian Kim",
        role: "P. Manager",
        team: "Management",
        age: "29",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png",
        email: "brian.kim@example.com",
        status: "active",
    },
    {
        id: 7,
        name: "Michael Hunt",
        role: "Designer",
        team: "Design",
        status: "paused",
        age: "27",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/4.png",
        email: "michael.hunt@example.com",
    },
    {
        id: 8,
        name: "Samantha Brooks",
        role: "HR Manager",
        team: "HR",
        status: "active",
        age: "31",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/4.png",
        email: "samantha.brooks@example.com",
    },
    {
        id: 9,
        name: "Frank Harrison",
        role: "F. Manager",
        team: "Finance",
        status: "vacation",
        age: "33",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/5.png",
        email: "frank.harrison@example.com",
    },
    {
        id: 10,
        name: "Emma Adams",
        role: "Ops Manager",
        team: "Operations",
        status: "active",
        age: "35",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/5.png",
        email: "emma.adams@example.com",
    },
    {
        id: 11,
        name: "Brandon Stevens",
        role: "Jr. Dev",
        team: "Development",
        status: "active",
        age: "22",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/7.png",
        email: "brandon.stevens@example.com",
    },
    {
        id: 12,
        name: "Megan Richards",
        role: "P. Manager",
        team: "Product",
        status: "paused",
        age: "28",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/7.png",
        email: "megan.richards@example.com",
    },
    {
        id: 13,
        name: "Oliver Scott",
        role: "S. Manager",
        team: "Security",
        status: "active",
        age: "37",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/8.png",
        email: "oliver.scott@example.com",
    },
    {
        id: 14,
        name: "Grace Allen",
        role: "M. Specialist",
        team: "Marketing",
        status: "active",
        age: "30",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/8.png",
        email: "grace.allen@example.com",
    },
    {
        id: 15,
        name: "Noah Carter",
        role: "IT Specialist",
        team: "I. Technology",
        status: "paused",
        age: "31",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/9.png",
        email: "noah.carter@example.com",
    },
    {
        id: 16,
        name: "Ava Perez",
        role: "Manager",
        team: "Sales",
        status: "active",
        age: "29",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/9.png",
        email: "ava.perez@example.com",
    },
    {
        id: 17,
        name: "Liam Johnson",
        role: "Data Analyst",
        team: "Analysis",
        status: "active",
        age: "28",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/11.png",
        email: "liam.johnson@example.com",
    },
    {
        id: 18,
        name: "Sophia Taylor",
        role: "QA Analyst",
        team: "Testing",
        status: "active",
        age: "27",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/11.png",
        email: "sophia.taylor@example.com",
    },
    {
        id: 19,
        name: "Lucas Harris",
        role: "Administrator",
        team: "Information Technology",
        status: "paused",
        age: "32",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/12.png",
        email: "lucas.harris@example.com",
    },
    {
        id: 20,
        name: "Mia Robinson",
        role: "Coordinator",
        team: "Operations",
        status: "active",
        age: "26",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/12.png",
        email: "mia.robinson@example.com",
    },
];

export default function LeadCard({ isOpen, onOpen, onOpenChange, lead }) {

    return (
        <>
            <Drawer
                hideCloseButton
                backdrop="blur"
                classNames={{
                    base: "sm:data-[placement=right]:m-2 sm:data-[placement=left]:m-2  rounded-medium bg-[#e8e8e8]",
                }}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="absolute top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-start bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                                <Tooltip content="Close">
                                    <Button
                                        isIconOnly
                                        className="text-default-400"
                                        size="sm"
                                        variant="light"
                                        onPress={onClose}
                                    >
                                        <svg
                                            fill="none"
                                            height="20"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                                        </svg>
                                    </Button>

                                </Tooltip>
                                <div className="flex items-center justify-center w-[80%]">
                                    Details
                                </div>

                            </DrawerHeader>
                            <DrawerBody className="pt-16 px-3">
                                <div>
                                    <LeadDetailNameCard lead={lead} />



                                    <div className="pb-2 gap-2 flex text-xs overflow-scroll scrollbar-hide">
                                        <a href={`tel:${lead.phone}`} className="rounded-2xl bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] items-center px-5 py-2 flex gap-2" ><PhoneIcon className="w-5 text-gray-600" />Call</a>
                                        <a href={`https://wa.me/${lead.phone}`} className="rounded-2xl bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] items-center px-5 py-2 flex gap-2" ><IoLogoWhatsapp className="text-2xl text-gray-600" />WhatsApp</a>
                                        <a href={`mailto:${lead.phone}`} className="rounded-2xl bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] items-center px-5 py-2 flex gap-2" ><MdEmail className="text-2xl text-gray-600" />Email</a>
                                        <a href={`sms:${lead.phone}`} className="rounded-2xl bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] items-center px-5 py-2 flex gap-2" ><FaMessage className="text-large text-gray-600" />Text</a>
                                    </div>
                                    {/* lead status  */}
                                    <div className="my-3">
                                        <h1 className="font-bold text-md text-gray-700 pb-2 flex gap-2"><MegaphoneIcon className="w-4" />Lead Status</h1>
                                        <div className="flex flex-wrap items-center justify-between">
                                            <div className="scale-125 pl-2">
                                                <StatusChip status={lead.status} />
                                            </div>
                                            <button
                                                className="
                                            bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] items-center relative p-2 px-3 rounded-[12px] flex gap-2 text-xs">
                                                <PlusIcon className="w-4" /> Change Status
                                            </button>
                                        </div>
                                    </div>


                                </div>

                                <div>
                                    <LeadMeetingDetalsTable />
                                </div>
                                <div className="">
                                    <LeadHistoryTable />
                                </div>

                                {/* Add Assist  */}
                                <div className="mb-10">
                                    <div className="flex gap-2">
                                        <Select
                                            className="text-xs"
                                            items={users}
                                            label=""
                                            labelPlacement="outside"
                                            placeholder="Select a user to assist"
                                        >
                                            {(user) => (
                                                <SelectItem key={user.id} textValue={user.name}>
                                                    <div className="flex gap-2 items-center">
                                                        <Avatar alt={user.name} className="shrink-0" size="sm" src={user.avatar} />
                                                        <div className="flex flex-col">
                                                            <span className="text-small">{user.name}</span>
                                                            <span className="text-tiny text-default-400">{user.email}</span>
                                                        </div>
                                                    </div>
                                                </SelectItem>
                                            )}
                                        </Select>
                                        <button
                                            className="
                                            bg-[#c9d5e0] [transform-style:preserve-3d] mix-blend-hard-light shadow-[6px_6px_6px_-2px_rgba(0,0,0,0.15),inset_4px_4px_3px_rgba(255,255,255,0.75),-4px_-4px_8px_rgba(255,255,255,0.55),inset_-1px_-1px_3px_rgba(0,0,0,0.2)] items-center relative p-2 px-3 rounded-[12px] flex gap-2 text-xs" onClick={() => setIsOpen(!isOpen)}>
                                            <PlusIcon className="w-4" /> Add
                                        </button>
                                    </div>
                                    <AvatarGroup
                                        isBordered
                                        max={3}
                                        renderCount={(count) => (
                                            <p className="text-small text-foreground font-medium ms-2">+{count} others</p>
                                        )}
                                        size="sm"
                                        className="pt-3"
                                        total={1}
                                    >
                                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                                        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                    </AvatarGroup>
                                </div>

                            </DrawerBody>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
