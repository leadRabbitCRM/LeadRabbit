"use client";
import { Badge, Button, Divider } from "@heroui/react";
import { UserIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@heroui/react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="flex justify-between py-2 px-2 items-center shadow-md sticky top-0 z-50 md:px-10 bg-white">
        <img src="/logo.png" alt="" className="w-16" />
        <div className="flex items-center gap-5">
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <div className="flex items-center gap-1">
              <Badge
                
                color="success"
                content=""
                placement="bottom-right"
                shape="circle"
              >
                <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
              </Badge>
              <div>
              <p className="text-sm">Tony Reichert</p>
              <p className="text-xs text-slate-400">@tonyreichert</p>
              </div>
              
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as</p>
                <p className="font-bold">@tonyreichert</p>
              </DropdownItem>
              <DropdownItem key="settings">
                <div className="flex items-center gap-2">
                  <UserIcon className="w-5 text-slate-400"/>
                <p>My Profile</p>
                </div>
                
                
                </DropdownItem>
              <DropdownItem key="team_settings">
                <div className="flex items-center gap-2">
                  <ClipboardDocumentCheckIcon className="w-5 text-slate-400"/>
                <p>My Tasks</p>
                </div>
                
                </DropdownItem>
              
              <DropdownItem key="logout" color="danger">
                <Divider orientation="horizontal" className="mb-2"/>
                <Button
                  variant="flat"
                  color="danger"
                  className="w-full text-left"
                  onClick={() => {
                    // Handle logout logic here
                    console.log("Logging out...");
                  }}>Log Out</Button>
                
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="h-full">{children}</div>
    </div>
  );
}
