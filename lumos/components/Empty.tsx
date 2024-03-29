import Image from "next/image";
import React from "react";

interface EmptyProps {
  label: string;
  image: any;
}

export const Empty = ({ label, image }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center gap-6">
      <div className="relative h-32 w-32 opacity-[60%]">
        <Image alt="Empty" fill src={image} />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
