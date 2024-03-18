"use client";

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { LuShare2 } from "react-icons/lu";
import { PiCopySimpleLight } from "react-icons/pi";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

const ShareButton = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-3 rounded-full bg-indigo-950 hover:bg-blue-950 cursor-pointer duration-500">
          <LuShare2 className="h-5 w-5" />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-r from-indigo-700 to-indigo-600 border-0">
        <DialogHeader className="space-y-3 text-white">
          <DialogTitle>Share Lumos AI</DialogTitle>
          <DialogDescription className="text-gray-200">
            Spread the magic of Lumos AI with your friends! Invite your friends
            to join the creative journey today.
          </DialogDescription>
        </DialogHeader>
        <div className="justify-center items-center gap-3 grid grid-cols-8">
          <Input
            className="col-span-7 font-semibold"
            placeholder="https://getlumos.vercel.app"
            disabled
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() =>
                    navigator.clipboard.writeText("https://getlumos.vercel.app")
                  }
                  variant="ghost"
                  className="col-span-1 p-2 text-gray-600 bg-violet-200 hover:bg-violet-300"
                >
                  <PiCopySimpleLight className="h-6 w-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-900 text-white border-0 py-0.5 px-1.5 mb-0.5 text-xs">
                <p>Copy link</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareButton;
