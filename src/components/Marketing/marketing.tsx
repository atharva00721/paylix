import React from "react";
import { Announcement } from "../Hero/Announcement";

const Marketing = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 md:py-24 px-2 md:px-4">
      {/* Badge */}

      <Announcement
        badge=""
        message="PAYMENTS"
        iconPosition="left"
        className="mb-8 px-3 text-md !text-[#6A3CE2] !bg-[#C0B9F9]/40 border leading-none uppercase"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.69598 14.6841C5.47898 14.6841 5.25998 14.6431 5.04998 14.5591L3.10498 13.7861C2.43398 13.5201 2.00098 12.8811 2.00098 12.1601V9.45605H3.50098V12.1601C3.50098 12.2631 3.56298 12.3541 3.65898 12.3921L5.60398 13.1651C5.70298 13.2041 5.81698 13.1771 5.88698 13.0941L7.55298 11.1161L8.69998 12.0821L7.03298 14.0611C6.69298 14.4641 6.19998 14.6841 5.69598 14.6841Z"
            fill="#2563EB"
          />
          <path
            d="M12.5 0C12.217 0 11.901 0.088 11.683 0.174C11.465 0.26 8.18102 1.56 6.50102 2.24C4.82902 2.917 3.15602 3.594 1.34102 4.297C0.896023 4.469 0.533023 4.825 0.346023 5.274C0.119023 5.817 -0.000976562 6.414 -0.000976562 7C-0.000976562 7.601 0.119023 8.188 0.354023 8.746C0.542023 9.189 0.892023 9.529 1.33102 9.699C1.33102 9.699 11.471 13.741 11.674 13.822C11.877 13.903 12.213 14 12.498 14C14.493 14 15.998 10.991 15.998 7C15.998 3.009 14.493 0 12.498 0H12.5ZM12.5 12.5C11.685 12.5 10.5 10.357 10.5 7C10.5 3.643 11.685 1.5 12.5 1.5C13.315 1.5 14.5 3.643 14.5 7C14.5 10.357 13.315 12.5 12.5 12.5Z"
            fill="#2563EB"
          />
          <path
            d="M13.5 7C13.5 6.172 12.828 5.5 12 5.5C11.947 5.5 11.897 5.51 11.845 5.516C11.787 5.968 11.75 6.461 11.75 7C11.75 7.539 11.787 8.032 11.845 8.484C11.897 8.489 11.947 8.5 12 8.5C12.828 8.5 13.5 7.828 13.5 7Z"
            fill="#2563EB"
          />
        </svg>
      </Announcement>

      {/* Headline */}
      <h1 className="text-center text-3xl md:text-5xl text-gray-900 mb-4">
        Paylix Marketing
      </h1>
      {/* Subtext */}
      <p className="text-center text-base md:text-lg text-gray-500 max-w-2xl">
        With everything powered by a single platform, you don't have to choose
        just one type of digital product.
      </p>
      <div className="max-w-6xl w-full mx-auto mt-10 px-2 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {/* Services Card */}
          <div className="bg-background border border-border rounded-xl min-h-[300px] md:h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8 pb-2 ">
              <h2 className="text-lg font-semibold mb-2">Services</h2>
              <p className="text-muted-foreground">
                Supercharge your creativity and sell directly through a safe,
                and battle-tested platform.
              </p>
            </div>
            <div className="flex justify-center items-center px-8 bg-cover bg-center">
              <img
                src="/marketing/Services.svg"
                alt="Services"
                className="w-full h-auto mt-10 select-none pointer-events-none object-contain"
              />
              <div className="absolute w-[720px] h-[100px] left-[calc(50%-360px)] bottom-[-37px] bg-white blur-[25px] pointer-events-none" />
            </div>
          </div>
          {/* Subscriptions Card */}
          <div className="bg-background border border-border rounded-xl min-h-[300px] md:h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8 ">
              <h2 className="text-lg font-semibold mb-2">Subscriptions</h2>
              <p className="text-muted-foreground">
                If it's a daily, weekly, monthly, or yearly plan, we support it
                all. All simply integrated.
              </p>
            </div>
            <div className="mt-2">
              <img
                src="/marketing/Subscriptions.svg"
                alt="Subscriptions"
                className="w-full h-auto mt-8 px-10  select-none pointer-events-none object-contain"
              />
              <div className="absolute w-[720px] h-[100px] left-[calc(50%-360px)] bottom-[-37px] bg-white blur-[25px] pointer-events-none" />
            </div>
          </div>

          {/* Coupons Card */}
          <div className="bg-background border border-border rounded-xl min-h-[300px] md:h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8">
              <h2 className="text-lg font-semibold mb-2">Coupons</h2>
              <p className="text-muted-foreground">
                Create Coupons through the dashboard.
              </p>
            </div>
            <img
              src="/marketing/Coupons.png"
              alt="Coupons"
              className="w-full h-auto px-10 mt-8 select-none pointer-events-none object-contain"
            />
          </div>
          {/* Serials Card */}
          <div className="bg-background border border-border rounded-xl min-h-[300px] md:h-[500px] flex flex-col relative overflow-hidden">
            <div className="p-8 pb-2 ">
              <h2 className="text-lg font-semibold mb-2">Serials</h2>
              <p className="text-muted-foreground">
                Sell accounts, license keys, and activation codes. Save it and
                make cash.
              </p>
            </div>
            <img
              src="/marketing/Serials.svg"
              alt="Serials"
              className="w-full h-auto mt-8 px-8 select-none pointer-events-none object-contain"
            />
            <div className="absolute w-[720px] h-[100px] left-[calc(50%-360px)] bottom-[-37px] bg-white blur-[25px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
