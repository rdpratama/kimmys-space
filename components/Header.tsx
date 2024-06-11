import { Key } from "react";
import * as React from "react";
import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

async function getData() {
  const res = await fetch("https://showroom-admin.vercel.app/schedules/");

  if (!res.ok) {
    throw new Error("Failed fetching data");
  }

  return res.json();
}

export default async function Header() {
  const data = await getData();
  const filteredData = data.filter(
    (data: { isOnWeekSchedule: boolean }) => data.isOnWeekSchedule === true
  );
  // const stringifiedList = filteredData.map((member) => member.name);

  console.log(filteredData);
  return (
    <main className="">
      <ScrollArea className="h-[22rem] w-[23rem] rounded-md border p-4">
        <div className="w-80 h-10 border-b">
          <h1 className="text-xl">Theater</h1>
        </div>
        <div className="w-80 h-80">
          {filteredData.map((product: any) => (
            <div key={product} className="w-80">
              <Sheet>
                <SheetTrigger asChild>
                  <div className="w-full h-14 flex items-center border-b">
                    <h1 className="cursor-pointer">
                      {product.setlist["name"]}
                    </h1>
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="py-5">
                      {product.setlist["name"]}
                    </SheetTitle>
                    <img src={product.setlist["image"]} className="rounded" />
                    <SheetDescription>
                      {product.setlist["description"]}
                    </SheetDescription>
                    <h4>Line up :</h4>
                    <p></p>
                  </SheetHeader>
                  <SheetFooter>
                    <Button>Apply</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          ))}
        </div>
      </ScrollArea>
    </main>
  );
}
