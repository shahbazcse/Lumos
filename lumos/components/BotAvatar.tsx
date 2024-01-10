import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = ({ avatar }) => {
  return (
    <Avatar>
      <AvatarImage className="p-1" src={avatar} />
    </Avatar>
  );
};
