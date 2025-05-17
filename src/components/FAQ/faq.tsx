"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there any money-back guarantee?",
    answer:
      "We're certain that you'll love Paylix where you wouldn't need to request a refund, but as certain as we are, you'll be amazed to hear that we have a 14-day money-back guarantee. No questions asked. Learn more about how you can request a refund for your subscription ",
    link: { text: "here", href: "#" },
  },
  {
    question: "Who owns the products I upload or sell?",
    answer:
      "You retain full ownership of all products you upload or sell through Paylix.",
  },
  {
    question: "Does Paylix charge a setup fee?",
    answer: "No, Paylix does not charge any setup fees.",
  },
  {
    question: "Can I cancel my Paylix subscription at any time?",
    answer:
      "Yes, you can cancel your subscription at any time from your account dashboard.",
  },
  {
    question: "Do I have to choose my plan first?",
    answer:
      "You can explore Paylix and its features before choosing a plan that fits your needs.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your account email from your profile settings page.",
  },
];

export default function FAQ() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#1A0C3B" }}
    >
      {/* Gradient Balls */}
      <div
        className="pointer-events-none select-none absolute top-0 left-0 w-[500px] h-[500px] -translate-x-1/3 -translate-y-1/3 z-0"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#A259FF] via-[#3F8CFF] to-transparent opacity-60 blur-3xl" />
      </div>
      <div
        className="pointer-events-none select-none absolute bottom-0 right-0 w-[600px] h-[600px] translate-x-1/3 translate-y-1/3 z-0"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tl from-[#FFB86C] via-[#FF6B9A] to-transparent opacity-60 blur-3xl" />
      </div>
      {/* FAQ Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto py-20 px-2 md:px-6 flex flex-col items-center">
        <h2 className="text-center text-3xl md:text-5xl text-background font-light mb-4">
          Frequently asked questions
        </h2>
        <p className="text-background/80 text-center mb-10 max-w-2xl text-base md:text-lg">
          Don't see your question here?{" "}
          <a
            href="#"
            className="underline text-background/90 hover:text-background"
          >
            Chat with us!
          </a>
        </p>
        <div className="relative w-full">
          <Accordion
            type="single"
            collapsible
            defaultValue="faq-0"
            className="flex flex-col w-full overflow-hidden border-t border-b border-white/10 bg-transparent backdrop-blur-md divide-y divide-white/10"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${idx}`}
                className="!border-t !border-b !border-white/10 border-l-0 border-r-0"
              >
                <AccordionTrigger className="px-6 md:px-8 py-8 text-left text-lg md:text-xl font-semibold text-background bg-transparent hover:bg-white/10 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-6 text-base md:text-lg text-background/80 bg-transparent">
                  {faq.answer}
                  {faq.link && (
                    <>
                      {" "}
                      <a
                        href={faq.link.href}
                        className="underline text-background/90 hover:text-background"
                      >
                        {faq.link.text}
                      </a>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
