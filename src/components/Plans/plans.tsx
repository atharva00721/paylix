"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: { Monthly: 0, Yearly: 0, Lifetime: 0 },
    description:
      "For individuals and small teams trying out Paylix without limits.",
    transactionFee: "5%",
    border: "border-t-green-100",
    headerBg: "bg-green-50",
    badgeText: "text-green-600",
  },
  {
    name: "Pro",
    price: { Monthly: 29, Yearly: 24.99, Lifetime: 499 },
    description: "Grow your online business with tools proven to increase.",
    transactionFee: "3%",
    border: "border-t-violet-100",
    headerBg: "bg-violet-50",
    badgeText: "text-violet-600",
    yearlyNote: "Billed yearly at €24.99",
    lifetimeNote: "One-time payment of €499",
  },
  {
    name: "Business",
    price: { Monthly: 199, Yearly: 166.65, Lifetime: 2999 },
    description:
      "Scale your growing business with a comprehensive set of features.",
    transactionFee: "5%",
    border: "border-t-pink-100",
    headerBg: "bg-pink-50",
    badgeText: "text-pink-600",
    yearlyNote: "Billed yearly at €166.65",
    lifetimeNote: "One-time payment of €2999",
  },
];

const periods = ["Monthly", "Yearly", "Lifetime"];

export default function Plans() {
  const [period, setPeriod] = useState("Monthly");

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-2 md:px-6 flex flex-col items-center">
      <h2 className="text-center text-3xl md:text-5xl text-foreground/90 mb-4">
        Plans & Pricing
      </h2>
      <p className="text-muted-foreground text-center mb-10 max-w-2xl text-base md:text-lg">
        Whether you're starting out or selling out in minutes, there's a plan
        for you.
      </p>
      {/* Period Switcher */}
      <div className="flex gap-2 mb-12 bg-muted p-1 rounded-full">
        {periods.map((p) => (
          <button
            key={p}
            className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
              period === p
                ? "bg-background shadow text-foreground"
                : "text-muted-foreground hover:bg-background/70"
            }`}
            onClick={() => setPeriod(p)}
            type="button"
          >
            {p}
          </button>
        ))}
      </div>
      {/* Plans Grid */}
      <div className="relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full rounded-2xl overflow-hidden border border-border shadow-lg bg-white">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`flex flex-col h-full border-t-4 ${plan.border} ${
                idx !== 0 ? "border-l border-border" : ""
              }`}
            >
              {/* Header */}
              <div
                className={`flex items-center px-6 md:px-8 py-2 ${plan.headerBg}`}
              >
                <span
                  className={`font-semibold text-base md:text-md ${plan.badgeText}`}
                >
                  {plan.name}
                </span>
              </div>
              {/* Content */}
              <div className="flex py-8 flex-col flex-1 px-6 md:px-8 items-start">
                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-3xl md:text-4xl font-extrabold">
                      €{plan.price[period as keyof typeof plan.price]}
                    </span>
                    <span className="text-muted-foreground text-base md:text-lg font-medium">
                      {period === "Monthly"
                        ? "/ mo"
                        : period === "Yearly"
                        ? "/ per month"
                        : "/ one-time"}
                    </span>
                  </div>
                  {period === "Yearly" && plan.yearlyNote && (
                    <div className="mt-1 text-xs md:text-sm font-semibold text-muted-foreground">
                      {plan.yearlyNote}
                    </div>
                  )}
                  {period === "Lifetime" && plan.lifetimeNote && (
                    <div className="mt-1 text-xs md:text-sm font-semibold text-muted-foreground">
                      {plan.lifetimeNote}
                    </div>
                  )}
                  {/* Invisible placeholder for alignment */}
                  {(period === "Monthly" ||
                    (period === "Yearly" && !plan.yearlyNote) ||
                    (period === "Lifetime" && !plan.lifetimeNote)) && (
                    <div className="mt-1 text-xs md:text-sm font-semibold opacity-0 select-none">
                      placeholder
                    </div>
                  )}
                </div>
                <div className="mt-1 min-h-[48px] text-left text-base md:text-lg text-foreground mb-8 md:mb-10">
                  {plan.description}
                </div>
                <Button
                  variant={plan.name === "Pro" ? "default" : "outline"}
                  className={`mt-2 w-full md:w-fit px-6 py-2 text-base md:text-lg font-medium ${
                    plan.name === "Pro"
                      ? "bg-black text-white hover:bg-black/90"
                      : ""
                  }`}
                >
                  Get Started
                </Button>
              </div>
              {/* Footer */}
              <div className="mt-auto border-t border-border pt-5 px-6 md:px-8 pb-5 bg-white">
                <div className="flex justify-between w-full text-sm md:text-base">
                  <span className="text-muted-foreground">
                    Transaction Fees
                  </span>
                  <span className="font-bold text-foreground">
                    {plan.transactionFee}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
