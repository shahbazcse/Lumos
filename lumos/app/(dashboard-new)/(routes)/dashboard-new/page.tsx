import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-5 px-6 pt-8 pb-4 space-y-8">
        <p className="text-3xl font-semibold">Explore latest AI models</p>
        <ScrollArea className="h-[45rem]">
          <div className="grid grid-rows-1 gap-6 pr-5">
            {[...Array(10)].map((_, index) => (
              <Card key={index} className="w-full h-36">
                <CardContent></CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="col-span-3">World</div>
    </div>
  );
};

export default DashboardPage;
