import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-8 p-8 gap-8 items-end">
      <div className="col-span-5 space-y-8">
        <p className="text-3xl font-semibold pl-2">Explore latest AI models</p>
        <div className="bg-indigo-950 bg-opacity-50 rounded-md px-2 py-3">
          <ScrollArea className="h-[42.5rem] px-2 py-2">
            <div className="grid grid-rows-1 gap-5 px-2">
              {[...Array(10)].map((_, index) => (
                <Card key={index} className="w-full h-[9.4rem] border-none">
                  <CardContent></CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="col-span-3 space-y-8">
        <p className="text-xl font-semibold pl-2">Recent Generations</p>
        <ScrollArea className="h-[44rem]">
          <Table className="bg-indigo-950 rounded-md bg-opacity-50 h-[9.68rem]">
            <TableBody>
              {[...Array(20)].map((item, index) => (
                <TableRow key={0} className="h-20">
                  <TableCell className="font-medium">Hello</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
};

export default DashboardPage;
