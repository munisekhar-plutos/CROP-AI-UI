"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BellIcon, UserCircleIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  const [activePage, setActivePage] = useState("Overview"); // Virtual DOM Effect
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const menuItems = [
    { name: "Overview", path: "overview" },
    { name: "ERP", path: "erp" },
    { name: "Bill Payment Requests", path: "bill-payment-requests" },
    { name: "Bill Management", path: "bill-management" },
    { name: "Manage Groups", path: "manage-groups" },
    { name: "Funds & Allocations", path: "funds-allocations" },
  ];

  // Function to handle virtual navigation without reloading
  const handleNavigation = (item) => {
    setActivePage(item.name); // Change active state for Virtual DOM effect
    router.push(`/${item.path}`, { shallow: true }); // Change URL without reload
  };

  return (
    <>
      <nav className="bg-white shadow-sm flex justify-between items-center px-6 py-3 fixed top-0 left-0 w-full z-50">
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
                activePage === item.name ? "bg-blue-600 text-white" : "hover:text-blue-600"
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
                  activePage === item.name ? "bg-blue-600 text-white" : "hover:text-blue-600"
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

      {/* Content Rendering Based on Active Page */}
      <div className="p-6 mt-16">
        {/* {activePage === "Overview" && <Overview />} */}
        {activePage === "ERP" && <ERP />}
        {activePage === "Bill Payment Requests" && <BillPaymentRequests />}
        {activePage === "Bill Management" && <BillManagement />}
        {activePage === "Manage Groups" && <ManageGroups />}
        {activePage === "Funds & Allocations" && <FundsAllocations />}
      </div>
    </>
  );
}

// Dummy Components for Page Content Rendering
// const Overview = () => <div className="text-xl font-semibold">Overview Page Content</div>;
const ERP = () => <div className="text-xl font-semibold">ERP Page Content</div>;
const BillPaymentRequests = () => <div className="text-xl font-semibold">Bill Payment Requests Content</div>;
const BillManagement = () => <div className="text-xl font-semibold">Bill Management Content</div>;
const ManageGroups = () => <div className="text-xl font-semibold">Manage Groups Content</div>;
const FundsAllocations = () => <div className="text-xl font-semibold">Funds & Allocations Content</div>;
