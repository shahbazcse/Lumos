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
    <div className="relative grid grid-cols-8 p-8 items-start gap-6">
      <div className="col-span-5 space-y-7">
        <p className="text-2xl font-semibold px-6 py-2.5 rounded-2xl w-fit bg-gray-950 bg-opacity-40 border border-slate-800 sticky z-10 top-28">
          Explore latest AI models
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-4">
          {[...Array(10)].map((_, index) => (
            <Card key={index} className="aspect-square border-none rounded-xl">
              <CardContent></CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="col-span-3 space-y-8 sticky z-10 top-28">
        <p className="text-lg font-semibold px-6 py-2.5 rounded-2xl w-fit bg-gray-950 bg-opacity-40 border border-slate-800">
          Recent Generations
        </p>
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
