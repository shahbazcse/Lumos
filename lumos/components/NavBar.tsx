import React from "react";
import { UserButton } from "@clerk/nextjs";
import SideBarMobile from "@/components/SideBar-Mobile";
import { getApiLimitCount } from "@/lib/api-limit";

const NavBar = async () => {
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className="flex items-center p-4">
      <SideBarMobile apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;
