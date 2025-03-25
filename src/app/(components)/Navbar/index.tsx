import React from "react";
import { Menu } from "lucide-react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-grey-100 rounded-full hover:bg-blue-100"
          // onClick={() => {}}
        >
          <Menu className="w-4 h-4"></Menu>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
