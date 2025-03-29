"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname here
import { BellIcon, UserCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

// Define the type for menu items
type MenuItem = {
  name: string;
  path: string;
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Use usePathname to get the current route
  const router = useRouter();

  const menuItems: MenuItem[] = [
    { name: "Overview", path: "overview" },
    { name: "ERP", path: "erp" },
    { name: "Bill Payment Requests", path: "bill-payment-requests" },
    { name: "Bill Management", path: "bill-management" },
    { name: "Manage Groups", path: "manage-groups" },
    { name: "Funds & Allocations", path: "funds-allocations" },
  ];

  const handleNavigation = (item: MenuItem) => {
    router.push(`/${item.path}`);
  };

  return (
    <>
      <nav className="bg-white shadow-sm flex justify-between items-center px-6 py-3 fixed top-0 left-0 w-full z-50 mb-1"> {/* Added mb-1 for a small gap */}
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="https://storage.googleapis.com/test132223/test/image-1717136552249-image-1716968400113-Frame%202609485.svg"
            alt="Plutos ONE Logo"
            width={200}
            height={55}
            className="h-12 w-auto cursor-pointer"
            onClick={() => handleNavigation(menuItems[0])}
          />
        </div>

        {/* Center: Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer px-3 py-2 rounded-md transition ${
                pathname && pathname.includes(item.path) ? "bg-blue-600 text-white" : "hover:text-blue-600"
              }`}
              onClick={() => handleNavigation(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Right: Icons + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <BellIcon className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900 transition" />
          <div className="relative w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center cursor-pointer">
            <UserCircleIcon className="h-6 w-6 text-purple-600" />
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center p-4 gap-3 text-gray-800">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer px-3 py-2 rounded-md transition ${
                  pathname && pathname.includes(item.path) ? "bg-blue-600 text-white" : "hover:text-blue-600"
                }`}
                onClick={() => {
                  handleNavigation(item);
                  setMenuOpen(false);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
