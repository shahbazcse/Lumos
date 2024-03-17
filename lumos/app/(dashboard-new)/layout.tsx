import SideBar from "@/components/SideBar-new";
import React from "react";
import { clerkClient } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth() as any;
  const user = await clerkClient.users.getUser(userId);

  const email = user.emailAddresses[0].emailAddress;
  const name = `${user.firstName} ${user.lastName}`;

  return (
    <div className="h-full relative bg-[#090C2A] text-white">
      <SideBar email={email} name={name} />
      <main className="md:pl-72">
        <div className="h-24 w-full border-b border-gray-800"></div>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
