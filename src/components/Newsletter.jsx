import React from "react"

export default function Newsletter() {
  return (
    <div>
      <section className="py-[80px] lg:p-[90px] bg-primary relative">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="col-span">
              <div className="flex flex-wrap items-center justify-between">
                <div className="w-full lg:w-auto">
                  <h3 className="font-lora text-white text-[24px] sm:text-[30px] xl:text-[36px] leading-[1.277] mb-[10px]">
                    Are you a Home Owner?
                  </h3>
                  <p className="text-secondary leading-[1.5] tracking-[0.03em] mb-10">
                    Put your email address and get listed.
                  </p>
                  <form id="mc-form" action="#" className="relative w-full">
                    <input
                      id="mc-email"
                      className="font-light text-white leading-[1.75] opacity-100 border border-secondary w-full lg:w-[395px] xl:w-[495px] h-[60px] rounded-[10px] py-[15px] pl-[15px] pr-[15px] sm:pr-[135px] focus:border-white focus:outline-none border-opacity-60 placeholder:text-[#E2E2E2] bg-transparent"
                      type="text"
                      placeholder="Enter your email here..."
                    />
                    <button
                      id="mc-submit"
                      type="submit"
                      className="text-white font-medium text-[16px] leading-none tracking-[0.02em] bg-secondary py-[17px] px-[20px] mt-5 sm:mt-0 rounded-[10px] hover:bg-white hover:text-primary transition-all sm:absolute sm:right-[4px] sm:top-1/2 sm:-translate-y-1/2"
                    >
                      Get Listed
                    </button>
                  </form>
                  <div className="mailchimp-alerts text-centre">
                    <div className="mailchimp-submitting"></div>
                    <div className="mailchimp-success text-green-400"></div>
                    <div className="mailchimp-error text-red-600"></div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
