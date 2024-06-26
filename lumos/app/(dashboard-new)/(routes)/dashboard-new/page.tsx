import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-8 px-6 py-8 items-start gap-6 h-full">
      <div className="col-span-5 space-y-5">
        <p className="text-2xl backdrop-blur-lg py-2 px-6 font-semibold rounded-full w-fit sticky z-10 top-32">
          Explore latest AI models
        </p>
        <ScrollArea>
          <div className="grid grid-rows-1 gap-5 px-4 scroll-smooth transition-all">
            {[...Array(20)].map((_, index) => (
              <Card key={index} className="border-none rounded-xl h-[14.1rem]">
                <div className="h-full flex items-end justify-end">
                  <div className="flex flex-col items-start space-y-4 m-4 justify-end">
                    <p className="text-sm text-gray-500">
                      Last Used: 12/04/2024
                    </p>
                    <p className="text-sm text-gray-500">Total Used: 25</p>
                    <Button
                      className="rounded-full px-6 py-2"
                      variant="outline"
                    >
                      Generate art
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="col-span-3 space-y-7 sticky z-10 top-32">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold rounded-2xl w-fit">
            Recent Generations
          </p>
          <Button className="rounded-full" variant="outline">
            View all
          </Button>
        </div>
        <Table className="bg-indigo-950 rounded-md bg-opacity-50 h-[9.68rem]">
          <TableBody>
            {[...Array(7)].map((item, index) => (
              <TableRow key={index} className="h-24">
                <TableCell className="font-medium">Hello</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardPage;
