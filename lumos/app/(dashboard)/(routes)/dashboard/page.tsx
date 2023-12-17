import React from "react";
import { UserButton } from "@clerk/nextjs";

const DashbordPage = () => {
  return (
    <div>
      <p>Dashbord Page (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashbordPage;
