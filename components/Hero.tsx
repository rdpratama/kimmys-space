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
  const res = await fetch("https://api.crstlnz.my.id/api/event");

  if (!res.ok) {
    throw new Error("Failed fetching data");
  }

  return res.json();
}

export default async function Hero() {
  const data = await getData();
  const product = data["theater"]["upcoming"];

  console.log("fetch 200ok");
  return (
    <main className="">
      <ScrollArea className="h-[22rem] w-[23rem] rounded-md border p-4">
        <div className="w-80 h-10 border-b">
          <h1 className="text-xl">Theater</h1>
        </div>
        <div className="w-80 h-80">
          {product.map((product: any) => (
            <div key={product} className="w-80">
              <Sheet>
                <SheetTrigger asChild>
                  <div className="w-full h-14 flex items-center border-b">
                    <h1 className="cursor-pointer">{product.title}</h1>
                  </div>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="py-5">{product.title}</SheetTitle>
                    <img src={product.poster} className="rounded" />
                    <SheetDescription>
                      Show : {product.date}
                      <p>Member show : {product.member_count}</p>
                    </SheetDescription>
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
