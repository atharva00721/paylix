import React from "react";
import { Announcement } from "../Hero/Announcement";

const FraudShield = () => {
  return (
    <section className="w-full bg-muted/60 flex flex-col items-center justify-center py-24 px-4">
      {/* Badge */}

      <Announcement
        badge=""
        message="Fraud Shield"
        iconPosition="left"
        className="mb-8 px-3 text-md !text-[#6A3CE2] !bg-[#C0B9F9]/40 border leading-none uppercase"
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
        Fraud Dashboard
      </h1>

      <p className="text-center text-base md:text-lg text-gray-500 max-w-2xl">
        Stop blocking legitimate customers, and start blocking fraudulent
        customers. Your shop is protected all day, all night.
      </p>
      <div className="w-7xl mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {/* Filters Card */}
          <div className="bg-background border border-border rounded-xl h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8 pb-2 ">
              <h2 className="text-lg font-semibold mb-2">Filters</h2>
              <p className="text-muted-foreground">
                Advanced filters designed to protect your sales without manual
                intervention.
              </p>
            </div>
            <div className="flex justify-center items-center px-8 bg-cover bg-center">
              <img
                src="/fraud/Filters.png"
                alt="Filters"
                className="w-full h-auto mt-10 select-none pointer-events-none object-contain"
              />
              <div className="absolute w-[720px] h-[100px] left-[calc(50%-360px)] bottom-[-37px] bg-white blur-[25px] pointer-events-none" />
            </div>
          </div>
          {/* Block Cards*/}
          <div className="bg-background border border-border rounded-xl h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8 ">
              <h2 className="text-lg font-semibold mb-2">Block</h2>
              <p className="text-muted-foreground">
                Setup blacklist rules based on Email, Country Code, IP, or host
                or use our data of blacklists.
              </p>
            </div>
            <div className="flex justify-center items-center px-10 bg-cover bg-center">
              <img
                src="/fraud/Block.png"
                alt="Block"
                className="w-full h-auto select-none pointer-events-none object-contain"
              />
            </div>
          </div>
          {/* Auth Card */}
          <div className="bg-background border border-border rounded-xl h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8">
              <h2 className="text-lg font-semibold mb-2">Auth</h2>
              <p className="text-muted-foreground">
                Support for multi-method authentication keeping your account
                secure.
              </p>
            </div>
            <div className="flex justify-center items-center px-10 bg-cover bg-center">
              <img
                src="/fraud/Block.png"
                alt="Block"
                className="w-full h-auto select-none pointer-events-none object-contain"
              />
              <div className="absolute bottom-0 right-0 w-full h-18 bg-gradient-to-t from-background to-background/40 pointer-events-none " />
            </div>
          </div>
          {/* Community Card */}
          <div className="bg-[#FFF7ED] border border-border rounded-xl h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8 pb-2 ">
              <h2 className="text-lg font-semibold mb-2">
                Join Our Community of Enthusiasts
              </h2>
              <p className="text-muted-foreground">
                Everyone is invited to our global community of entrepreneurs,
                developers and professionals. We&apos;re super-stoked about the
                security in digital commerce.
              </p>
            </div>

            <img
              src="/fraud/community.png"
              alt="Payouts"
              className="w-full h-full p-4 select-none pointer-events-none object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FraudShield;
