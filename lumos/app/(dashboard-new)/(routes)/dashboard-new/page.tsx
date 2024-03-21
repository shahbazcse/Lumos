import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-5 px-6 pt-8 pb-4 space-y-8">
        <p className="text-3xl font-semibold">Explore latest AI models</p>
        <div className="bg-indigo-950 bg-opacity-50 rounded-md px-2 py-3">
          <ScrollArea className="h-[43.5rem] px-2 py-2">
            <div className="grid grid-rows-1 gap-5 px-2">
              {[...Array(10)].map((_, index) => (
                <Card key={index} className="w-full h-[9.68rem] border-none">
                  <CardContent></CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="col-span-3">World</div>
    </div>
  );
};

export default DashboardPage;
