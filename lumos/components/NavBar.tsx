import React from "react";
import { UserButton } from "@clerk/nextjs";
import SideBarMobile from "@/components/SideBar-Mobile";

const NavBar = () => {
  return (
    <div className="flex items-center p-4">
      <SideBarMobile />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
