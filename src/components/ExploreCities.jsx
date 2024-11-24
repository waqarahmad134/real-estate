import React from "react"

export default function ExploreCities() {
  return (
    <div>
      <section className="explore-cities-section pb-[50px] pt-[80px] lg:pt-[125px]">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="mb-[30px] lg:mb-[60px] text-center">
                <span className="text-secondary text-tiny inline-block mb-2">
                  Explore Cities
                </span>
                <h2 className="font-lora text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize font-medium">
                  Find Your Neighborhood
                  <span className="text-secondary">.</span>
                </h2>
              </div>
              <div className="cities-slider">
                <div className="swiper  -mx-[30px] -my-[60px] px-[30px] py-[60px]">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide text-center">
                      <div className="relative group">
                        <a
                          href="agency"
                          className="block group-hover:shadow-[0_10px_15px_0px_rgba(0,0,0,0.1)] transition-all duration-300"
                        >
                          <img
                            src="assets/images/cities/image1.png"
                            className="w-full h-full block mx-auto rounded-[6px]"
                            loading="lazy"
                            width="270"
                            height="380"
                            alt="New York"
                          />
                          <div className="bg-[rgb(255,253,252,0.9)] rounded-[6px] px-[5px] py-[15px] absolute group-hover:bottom-[25px] group-hover:opacity-100 bottom-[0px] opacity-0 left-[25px] right-[25px] transition-all duration-500">
                            <span className="font-lora font-normal text-[18px] text-primary transition-all leading-none">
                              New York
                            </span>
                            <p className="font-light text-[14px] capitalize text-secondary transition-all leading-none">
                              36 Properties
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide text-center">
                      <div className="relative group">
                        <a
                          href="agency"
                          className="block group-hover:shadow-[0_10px_15px_0px_rgba(0,0,0,0.1)] transition-all duration-300"
                        >
                          <img
                            src="assets/images/cities/image2.png"
                            className="w-full h-full block mx-auto rounded-[6px]"
                            loading="lazy"
                            width="270"
                            height="380"
                            alt="Sun Francisco"
                          />
                          <div className="bg-[rgb(255,253,252,0.9)] rounded-[6px] px-[5px] py-[15px] absolute group-hover:bottom-[25px] group-hover:opacity-100 bottom-[0px] opacity-0 left-[25px] right-[25px] transition-all duration-500">
                            <span className="font-lora font-normal text-[18px] text-primary transition-all leading-none">
                              Sun Francisco
                            </span>
                            <p className="font-light text-[14px] capitalize text-secondary transition-all leading-none">
                              18 Properties
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide text-center">
                      <div className="relative group">
                        <a
                          href="agency"
                          className="block group-hover:shadow-[0_10px_15px_0px_rgba(0,0,0,0.1)] transition-all duration-300"
                        >
                          <img
                            src="assets/images/cities/image3.png"
                            className="w-full h-full block mx-auto rounded-[6px]"
                            loading="lazy"
                            width="270"
                            height="380"
                            alt="Washington D.C."
                          />
                          <div className="bg-[rgb(255,253,252,0.9)] rounded-[6px] px-[5px] py-[15px] absolute group-hover:bottom-[25px] group-hover:opacity-100 bottom-[0px] opacity-0 left-[25px] right-[25px] transition-all duration-500">
                            <span className="font-lora font-normal text-[18px] text-primary transition-all leading-none">
                              Washington D.C.
                            </span>
                            <p className="font-light text-[14px] capitalize text-secondary transition-all leading-none">
                              27 Properties
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide text-center">
                      <div className="relative group">
                        <a
                          href="agency"
                          className="block group-hover:shadow-[0_10px_15px_0px_rgba(0,0,0,0.1)] transition-all duration-300"
                        >
                          <img
                            src="assets/images/cities/image4.png"
                            className="w-full h-full block mx-auto rounded-[6px]"
                            loading="lazy"
                            width="270"
                            height="380"
                            alt="New York"
                          />
                          <div className="bg-[rgb(255,253,252,0.9)] rounded-[6px] px-[5px] py-[15px] absolute group-hover:bottom-[25px] group-hover:opacity-100 bottom-[0px] opacity-0 left-[25px] right-[25px] transition-all duration-500">
                            <span className="font-lora font-normal text-[18px] text-primary transition-all leading-none">
                              New York
                            </span>
                            <p className="font-light text-[14px] capitalize text-secondary transition-all leading-none">
                              56 Properties
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide text-center">
                      <div className="relative group">
                        <a
                          href="agency"
                          className="block group-hover:shadow-[0_10px_15px_0px_rgba(0,0,0,0.1)] transition-all duration-300"
                        >
                          <img
                            src="assets/images/cities/image3.png"
                            className="w-full h-full block mx-auto rounded-[6px]"
                            loading="lazy"
                            width="270"
                            height="380"
                            alt="Francisco"
                          />
                          <div className="bg-[rgb(255,253,252,0.9)] rounded-[6px] px-[5px] py-[15px] absolute group-hover:bottom-[25px] group-hover:opacity-100 bottom-[0px] opacity-0 left-[25px] right-[25px] transition-all duration-500">
                            <span className="font-lora font-normal text-[18px] text-primary transition-all leading-none">
                              Francisco
                            </span>
                            <p className="font-light text-[14px] capitalize text-secondary transition-all leading-none">
                              18 Properties Sun
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
