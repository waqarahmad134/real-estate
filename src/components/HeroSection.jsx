import React from "react"

export default function HeroSection() {
  return (
    <div>
      <div className="bg-[#0b2c3d] flex flex-wrap items-center pt-40">
        <div className="">
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-12 p-20">
              <div className="col-span-12">
                <div className="slider-content max-w-[560px] relative z-[9]">
                  <div className="relative mb-5 sub_title">
                    <span className="text-base text-white block">
                      A new way to find Properties
                    </span>
                  </div>
                  <h1 className="font-lora text-secondary text-[36px] sm:text-[50px] md:text-[68px] lg:text-[50px] leading-tight xl:text-2xl title font-normal">
                    <span>Modern, Creative &amp; Luxury Homes</span>
                  </h1>

                  <p className="text-base text-white mt-8 mb-12 text max-w-[570px]">
                    Huge number of propreties availabe here for buy, and sell,
                    also you can find here co-living property, So you have lots
                    of opportunity
                  </p>
                  <div className="inline-block hero_btn">
                    <a
                      href="contact-us"
                      className="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-white before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto hover:text-primary before:transition-all leading-none px-[20px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-secondary after:rounded-md after:transition-all block"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
      
            </div>
            <div>
              <img
                src="https://htmldemo.net/bery/bery/assets/images/hero/home-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
