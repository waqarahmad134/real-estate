import React from "react"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import Header from "../components/Header"

export default function Signup() {
  return (
    <>
      <Header />
      <div className="p-30 relative mb-16">
        <form className="mt-40 mb-30 w-11/12 mx-auto">
          <div class="grid grid-cols-12 gap-x-[30px] mb-[-30px]">
            <div class="col-span-12 lg:col-span-6 mb-[30px]">
              <h2 class="font-lora text-primary text-[24px] sm:text-[30px] leading-[1.277] xl:text-xl mb-[15px] font-medium">
                Register Here<span class="text-secondary">.</span>
              </h2>
              <p class="max-w-[465px] mb-[50px]">
                Huge number of propreties availabe here for buy, sell and Rent.
                Also you find here co-living property, lots opportunity you have
                to choose here and enjoy huge discount you can get.
              </p>
              <div class="grid grid-cols-12 gap-x-[20px] gap-y-[35px]">
                <div class="col-span-12 flex gap-2">
                  <input
                    class="font-light w-full sm:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-secondary focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    class="font-light w-full sm:w-[400px] leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-secondary focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div class="col-span-12">
                  <input
                    class="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-secondary focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="text"
                    placeholder="Email"
                  />
                </div>

                <div class="col-span-12 w-full">
                  <input
                    class="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-secondary focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="password"
                    placeholder="Password"
                  />
                </div>

                <div class="col-span-12">
                  <input
                    class="font-light w-full leading-[1.75] placeholder:opacity-100 placeholder:text-body border border-primary border-opacity-60 rounded-[8px] p-[15px] focus:border-secondary focus:border-opacity-60 focus:outline-none focus:drop-shadow-[0px_6px_15px_rgba(0,0,0,0.1)] "
                    type="text"
                    placeholder="Role"
                  />
                </div>

                <div class="col-span-12">
                  <div class="flex flex-wrap items-center">
                    <button
                      type="submit"
                      class="before:rounded-md before:block before:absolute before:left-auto before:right-0 before:inset-y-0 before:-z-[1] before:bg-secondary before:w-0 hover:before:w-full hover:before:left-0 hover:before:right-auto before:transition-all leading-none px-[40px] py-[15px] capitalize font-medium text-white text-[14px] xl:text-[16px] relative after:block after:absolute after:inset-0 after:-z-[2] after:bg-primary after:rounded-md after:transition-all"
                    >
                      Login
                    </button>
                    <Link
                      to={"/signup"}
                      class="font-medium text-primary hover:text-secondary ml-[40px]"
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-12 lg:col-span-6 mb-[30px]">
              <img
                src="https://htmldemo.net/bery/bery/assets/images/contact/image.png"
                class="w-full h-auto rounded-[10px]"
                width="546"
                height="478"
                alt="image"
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
