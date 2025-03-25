"use client";

import { Menu } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      {/* Logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div> logo</div>
        <h1 className="font-extrabold text-2xl">Dashboard</h1>
        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">{/* links here */}</div>

      {/* FOOTER */}
      <div>
        <p>&copy; 2024 Company</p>
      </div>
    </div>
  );
};

export default Sidebar;
