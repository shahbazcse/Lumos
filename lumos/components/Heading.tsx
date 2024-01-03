import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className="px-8 lg:px-16 flex items-center gap-x-3 mb-8">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("h-10 w-10", iconColor)} />
      </div>
      <div>
        <h2 className={cn("text-3xl font-bold")}>{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
