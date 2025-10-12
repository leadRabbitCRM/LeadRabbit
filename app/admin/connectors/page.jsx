"use client";
import { Button } from "@heroui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { CheckIcon, MoonIcon, ShieldCheckIcon, ShieldExclamationIcon, UserCircleIcon, UserGroupIcon } from '@heroicons/react/24/solid'
import { Chip, Switch, Tab, Tabs, useDisclosure } from "@heroui/react";
import { useState } from "react";
import CustomModal from "./components/CustomModal";

export default function page() {
    const { data: session } = useSession();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <div className="w-full h-screen mt-3">


            <div className="px-3 py-5 rounded-small border-1 mx-3 bg-white border-gray-300">


                <div className="mb-2">
                    <p className="font-medium">All Intigrations</p>
                    <p className="text-xs">View your installed integrations and stay up to date with any future update</p>
                </div>
                <div className="flex flex-wrap gap-4 mb-5">

                    <Tabs aria-label="Tabs colors" color={"primary"} radius="full" size="sm" variant="underlined" className="">
                        <Tab key="photos" title="All Integrations" />
                        <Tab key="music" title="Enabled Integrations" />
                        {/* <Tab key="videos" title="Videos" /> */}
                    </Tabs>
                </div>
                {/* FaceBook  */}
                <div className="border-1 p-2 bg-white border-gray-300">
                    <div className="flex justify-between pb-2 px-2">
                        <div className="flex items-center gap-3">
                            <img src="/icons/facebookIcon.svg" alt="" className="w-10" />
                            <p className="font-bold text-medium">FaceBook</p>

                            {session ? (<Chip color="success" startContent={<ShieldCheckIcon className="w-5" />} variant="flat" size="sm" className="text-xs">Enabled</Chip>) : (<Chip color="danger" startContent={<ShieldExclamationIcon className="w-5" />} variant="flat" size="sm" className="text-xs">Disabled</Chip>)}
                        </div>
                        <Switch
                            onClick={onOpen}
                            color="primary"
                            endContent={<ShieldExclamationIcon />}
                            size="md"
                            
                            startContent={<ShieldCheckIcon />}
                        >
                        </Switch>
                        
                    </div>
                    <p className="text-xs px-1">Automatically fetch leads from your Facebook Lead Ads in real-time and sync them with your CRM or system for instant follow-up no manual work needed.</p>
                    <div className="flex flex-col gap-3 py-3">

                        <div className="px-4 py-3 bg-gray-200 rounded-small gap-3">
                            <div className="flex items-center">
                                <UserCircleIcon className="w-8" />
                                <p className="text-xs">My test Page</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <Chip color="primary" startContent={<UserGroupIcon className="w-4" />} variant="flat" size="sm">
                                    <p className="text-xs">250 Leads pulled</p>
                                </Chip>
                                <Button color="danger" className="text-xs" size="sm">Stop Ingesting Leads</Button>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-200 rounded-small">
                            <div className="flex items-center">
                                <UserCircleIcon className="w-8" />
                                <p className="text-xs">My test Page</p>
                            </div>
                            <div className="flex justify-end">
                                <Button color="primary" className="text-xs" size="sm">Start Ingesting Leads</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <CustomModal isOpen={isOpen} onOpenChange={onOpenChange}/>
            <div>{session?.accessToken}</div>
            {session ? (
                <div>
                    <p>Welcome, {session.user?.name}</p>
                    <button onClick={() => signOut("facebook")}>Log Out</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => signIn("facebook")}>Login</button>
                </div>
            )}
        </div>
    )
}
