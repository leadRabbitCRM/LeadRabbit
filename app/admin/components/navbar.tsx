"use client";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, UserIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
import { Badge, User, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Divider, Button } from "@heroui/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Tickets", "Employees", "Settings"];

  return (
    <header className="bg-white shadow-md">
      <div className=" mx-auto px-10 py-3 flex items-center justify-between">
        
        {/* Left: Logo + Menu toggle */}
        <div className="flex items-center gap-3">
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
          <img src="/logo.png" alt="Logo" className="w-[5rem]" />
        </div>

        {/* Middle: Links (hidden on mobile) */}
        <div className="flex items-center gap-10">
        <nav className="hidden sm:flex gap-6">
          <a href="/admin" className="hover:text-blue-500">Tickets</a>
          <a href="/admin/employees" className="hover:text-blue-500">Employees</a>
        </nav>

        {/* Right: Avatar dropdown */}
        <Dropdown placement="bottom-end">
          <DropdownTrigger className="cursor-pointer">
            <div className="flex items-center gap-2">
              <Badge color="success" content="" placement="bottom-right" shape="circle">
                <User
                  avatarProps={{
                    isBordered: true,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  name="John Doe"
                  className="transition-transform"
                />
              </Badge>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">Tony Reichert</p>
                <p className="text-xs text-gray-500">@tonyreichert</p>
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
                <UserIcon className="w-5 text-slate-400" />
                <p>My Profile</p>
              </div>
            </DropdownItem>
            <DropdownItem key="tasks">
              <div className="flex items-center gap-2">
                <ClipboardDocumentCheckIcon className="w-5 text-slate-400" />
                <p>My Tasks</p>
              </div>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              <Divider className="mb-2" />
              <Button
                variant="flat"
                color="danger"
                className="w-full text-left"
                onClick={() => console.log("Logging out...")}
              >
                Log Out
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md px-4 py-3 space-y-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block hover:text-blue-500"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
