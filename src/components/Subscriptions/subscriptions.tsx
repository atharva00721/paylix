import React from "react";
import { Announcement } from "../Hero/Announcement";

const Subscriptions = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4">
      {/* Badge */}

      <Announcement
        badge=""
        message="SUBSCRIPTIONS"
        iconPosition="left"
        className="mb-8 px-3 text-md !text-[#6A3CE2] !bg-[#C0B9F9]/40 border leading-none uppercase"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          <path
            d="M9 1C4.589 1 1 4.589 1 9C1 13.411 4.589 17 9 17C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1ZM11.105 12.243C10.753 12.603 10.277 12.848 9.75 12.969V13.25C9.75 13.664 9.414 14 9 14C8.586 14 8.25 13.664 8.25 13.25V12.972C7.264 12.766 6.574 12.162 6.283 11.208C6.162 10.812 6.385 10.393 6.782 10.272C7.178 10.15 7.597 10.375 7.718 10.771C7.837 11.16 8.087 11.557 9.039 11.557C9.439 11.557 9.811 11.421 10.033 11.195C10.183 11.041 10.257 10.855 10.251 10.643C10.243 10.32 10.128 9.955 8.859 9.728C6.882 9.375 6.481 8.226 6.418 7.572C6.356 6.926 6.535 6.351 6.936 5.91C7.293 5.517 7.783 5.296 8.251 5.175V4.75C8.251 4.336 8.587 4 9.001 4C9.415 4 9.751 4.336 9.751 4.75V5.152C10.548 5.347 11.174 5.866 11.509 6.659C11.67 7.041 11.491 7.481 11.11 7.642C10.727 7.802 10.288 7.624 10.127 7.243C10.055 7.073 9.837 6.557 9.039 6.557C8.763 6.557 8.271 6.669 8.045 6.918C7.974 6.997 7.882 7.135 7.91 7.428C7.925 7.581 7.97 8.046 9.122 8.252C10.834 8.559 11.719 9.351 11.75 10.606C11.765 11.221 11.536 11.802 11.105 12.243Z"
            fill="#6A3CE2"
          />
        </svg>
      </Announcement>

      {/* Headline */}
      <h1 className="text-center text-3xl md:text-5xl text-gray-900 mb-4">
        Paylix Subscriptions
      </h1>
      {/* Subtext */}
      <p className="text-center text-base md:text-lg text-gray-500 max-w-2xl">
        Effortlessly manage recurring payments with seamless support for both
        FIAT and cryptocurrency, enhancing convenience and flexibility for your
        subscriptions.
      </p>
      <div className="w-7xl mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {/* Active Subscriptions Card */}
          <div className="bg-background border border-border rounded-xl h-full flex flex-col relative overflow-hidden">
            <div className="p-8 pb-2 ">
              <h2 className="text-lg font-semibold mb-2">
                Active Subscriptions
              </h2>
              <p className="text-muted-foreground">
                Subscriptions enable businesses to charge their users with
                recurring payments.
              </p>
            </div>
            <div className="flex justify-center items-center mt-14 px-10 bg-cover bg-center">
              <img
                src="/subscription/Subscriptions.png"
                alt="Subscriptions"
                className="w-full h-full  select-none pointer-events-none object-contain"
              />
            </div>
          </div>
          {/* Customer Panel Card */}
          <div className="bg-background border border-border rounded-xl  h-full flex flex-col relative overflow-hidden">
            <div className="p-8 ">
              <h2 className="text-lg font-semibold mb-2">Customer Panel</h2>
              <p className="text-muted-foreground">
                Customers are also able to view, cancel, and update their active
                subscriptions through the customer panel.
              </p>
            </div>
            <img
              src="/subscription/Customer.png"
              alt="Customer"
              className="w-full h-auto px-10 mt-8 select-none pointer-events-none object-contain"
            />
          </div>
          {/* Customer Panel (Licenses) Card */}
          <div className="bg-background border border-border rounded-xl h-full flex flex-col relative overflow-hidden">
            <div className="p-8">
              <h2 className="text-lg font-semibold mb-2">Customer Panel</h2>
              <p className="text-muted-foreground">
                Customers are also able to manage their purchased licenses
                through the customer portal.
              </p>
            </div>
            <img
              src="/subscription/Manage.png"
              alt="Manage"
              className="w-full h-auto px-10 mt-8 select-none pointer-events-none object-contain"
            />
          </div>
          {/* PoS Dashboard Card */}
          <div className="bg-background border border-border rounded-xl h-full flex flex-col relative overflow-hidden">
            <div className="p-8 pb-2 ">
              <h2 className="text-lg font-semibold mb-2">PoS Dashboard</h2>
              <p className="text-muted-foreground">
                Access your PoS dashboard to learn more about our system and see
                recently created invoices.
              </p>
            </div>

            <div className="flex justify-center items-center px-8 bg-cover bg-center">
              <img
                src="/subscription/Recent.png"
                alt="Recent"
                className="w-full h-auto mt-10 select-none pointer-events-none object-contain"
              />
              <div className="absolute w-[720px] h-[100px] left-[calc(50%-360px)] bottom-[-37px] bg-white blur-[25px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
