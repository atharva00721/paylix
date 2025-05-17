import React from "react";
import { Announcement } from "../Hero/Announcement";

const Developers = () => {
  return (
    <section className="w-full bg-muted/60 flex flex-col items-center justify-center py-24 px-4">
      {/* Badge */}

      <Announcement
        badge=""
        message="Developer API"
        iconPosition="left"
        className="mb-8 px-3 text-md !text-[#E16727] !bg-[#FCB871]/40 leading-none uppercase"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.284 1.81294L8.03398 0.132942C7.68498 0.0209418 7.31598 0.0219418 6.96798 0.132942L1.71698 1.81294C0.988977 2.04594 0.500977 2.71594 0.500977 3.47994V9.99994C0.500977 13.5079 5.44698 15.3789 6.96098 15.8689C7.13798 15.9259 7.31898 15.9549 7.50098 15.9549C7.68298 15.9549 7.86298 15.9269 8.03898 15.8699C9.55498 15.3799 14.501 13.5089 14.501 10.0009V3.47994C14.501 2.71594 14.012 2.04594 13.284 1.81294ZM10.603 6.20194L7.20598 10.7019C7.07798 10.8709 6.88398 10.9779 6.67198 10.9969C6.65098 10.9989 6.62898 10.9999 6.60698 10.9999C6.41798 10.9999 6.23498 10.9289 6.09598 10.7989L4.48698 9.29894C4.18398 9.01594 4.16698 8.54194 4.44898 8.23894C4.73298 7.93594 5.20698 7.91994 5.50898 8.20094L6.50998 9.13394L9.40598 5.29794C9.65598 4.96794 10.126 4.90194 10.457 5.15194C10.788 5.40194 10.853 5.87094 10.603 6.20194Z"
            fill="#6A3CE2"
          />
        </svg>
      </Announcement>

      {/* Headline */}
      <h1 className="text-center text-3xl md:text-5xl text-gray-900 mb-4">
        Built for Developers
      </h1>

      <p className="text-center text-base md:text-lg text-gray-500 max-w-2xl">
        Paylix's intuitive and clear documentation make it easy to iterate as
        your business grows and changes.
      </p>
      <div className="w-7xl mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {/* Most Powerful API Card */}
          <div className="bg-[#121417] bg-[url('/dev/Dots.svg')] bg-cover bg-center border border-border rounded-xl h-[500px] flex flex-col relative text-background overflow-hidden">
            <div className="p-8 pb-2 ">
              <h2 className="text-lg font-semibold mb-2">Most Powerful API</h2>
              <p className="text-muted-foreground">
                A next-generation API that allows you to build on top of
                Paylix's extraordinary features.
              </p>
            </div>

            <img
              src="/dev/Code.svg"
              alt="Payouts"
              className="w-full h-full p-2 mb-8 select-none pointer-events-none object-contain"
            />
          </div>

          {/* Product Embeds Card */}
          <div className="bg-background border border-border rounded-xl h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8 ">
              <h2 className="text-lg font-semibold mb-2">
                Product Embeds for your Own Brand
              </h2>
              <p className="text-muted-foreground">
                It's simple. If a paylixecommerce-powered shop or custom shop
                doesn't fit, you can always embed products to your own.
              </p>
            </div>
            <div className="flex justify-center items-center px-10 bg-cover bg-center">
              <img
                src="/dev/Embeds.png"
                alt="Embeds"
                className="w-full h-full px-24 select-none pointer-events-none object-contain"
              />
            </div>
          </div>
          {/* HTML/CSS Editor Card */}
          <div className="bg-background border border-border rounded-xl h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8 pb-2 ">
              <h2 className="text-lg font-semibold mb-2">
                Make it yours with a HTML/CSS editor
              </h2>
              <p className="text-muted-foreground">
                In minutes you can take your shop to the next level with an
                advanced code editor catered for you.
              </p>
            </div>
            <img
              src="/dev/VisualEditor.svg"
              alt="Visual Editor"
              className="w-full h-auto pl-7 mt-8 select-none pointer-events-none object-contain"
            />
            <div className="absolute w-[720px] h-[100px] left-[calc(50%-360px)] bottom-[-37px] bg-background blur-[25px] pointer-events-none" />
          </div>
          {/* Plugins Card */}
          <div className="border border-border rounded-xl h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8 pb-2 ">
              <h2 className="text-lg font-semibold mb-2">
                Boost Your Ecommerce with Paylix Plugins
              </h2>
              <p className="text-muted-foreground">
                Choose from many different plugins, based on your current
                eCommerce solution to integrate Paylix Payments easily
              </p>
            </div>

            <img
              src="/dev/Plugins.svg"
              alt="Plugins"
              className="w-full h-full p-4 select-none pointer-events-none object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
