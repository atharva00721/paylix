"use client";

import * as React from "react";
import { Announcement } from "./Announcement";
import { Button } from "@/components/ui/button";
import Iphone15Pro from "../magicui/iphone-15-pro";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center min-h-[100vh] px-4 pt-16 pb-0 rounded-t-3xl overflow-hidden bg-foreground">
      {/* Blurred gradient background */}
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-b from-foreground to-background blur-2xl" /> */}
      {/* Badge and headline */}
      <div className="flex flex-col items-center gap-6 z-10">
        <div className="flex items-center gap-2 mt-8">
          <Announcement
            className="pr-3 text-background"
            badge="NEW"
            message="What are blockchain transaction fees?"
          >
            <ArrowRight className="w-4 h-4" />
          </Announcement>
        </div>
        <h1 className="text-center text-3xl md:text-7xl font-bold text-primary-foreground leading-tight drop-shadow-xl">
          Seamless Payment
          <br className="hidden md:block" /> Experience
        </h1>
        <p className="text-center text-lg md:text-xl text-muted-foreground max-w-2xl mt-2">
          End-to-end universal payment experience that simplifies commerce and
          transactions across cryptocurrencies and fiat.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
          <Button variant="default" size="lg" className="rounded-full">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            Pricing
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      {/* Dashboard and phone mockup */}
      <div className="relative flex flex-col items-center justify-center mt-36 w-full z-10">
        <div className="relative flex w-full max-w-7xl mx-auto min-h-[500px]">
          {/* Dashboard image */}
          <div className="absolute left-[0%] bottom-[30%] translate-y-1/4 md:translate-y-1/3 rounded-2xl overflow-hidden border border-border  w-[900px] max-w-full flex justify-center mx-auto z-10 h-full p-3 bg-pink-300/60">
            <img
              src="/mock-dashboard.png"
              alt="Paylix dashboard preview"
              className="w-full h-auto object-cover min-h-[520px] rounded-lg p-2 bg-background"
            />
          </div>
          {/* Phone mockup */}
          <div className="absolute left-[65%] bottom-[37%] translate-y-1/4 md:translate-y-1/3 z-20 w-full h-[600px] max-w-full overflow-hidden">
            <Iphone15Pro src="/mock-phone.png" className="" />
          </div>
          {/* White fade at the bottom */}
          <div className="absolute left-[0%] bottom-[30%] h-40 bg-gradient-to-t from-white/90 to-transparent pointer-events-none z-30" />
        </div>
      </div>
      {/* Cryptocurrency Transactions Section */}
      <div className="container mx-auto max-w-5xl bg-background py-16 mt-26 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Cryptocurrency Icons */}
          <div className="overflow-hidden relative w-full">
            <img 
              src="/crypto.svg" 
              alt="Cryptocurrency Icons" 
              className="w-full max-w-2xl mx-auto"
            />
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl font-bold tracking-tight text-foreground mt-8 mb-4">
            Cryptocurrency Transactions
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mb-10">
            Paylix provides you with the latest technologies, offering you a simple solution to sell your digital goods with cryptocurrencies
          </p>
          
          {/* View Fees Button */}
          <Button 
            variant="outline" 
            className="group border border-gray-200 dark:border-white/[0.08] hover:bg-gray-100 dark:hover:bg-gray-900 font-medium"
            asChild
          >
            <Link href="/fees">
              View Fees
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
