import React from "react"

export default function BlogSection() {
  return (
    <div>
      {" "}
      <section className="blog-section relative pb-[60px] md:pb-[80px] lg:pb-[120px] relative">
        <div className="container">
          <div className="">
            <div className="">
              <div className="mb-[60px] text-center">
                <span className="text-secondary text-tiny inline-block mb-2">
                  Our Blog
                </span>
                <h2 className="font-lora text-primary text-[24px] sm:text-[30px] xl:text-xl capitalize font-medium">
                  Check our blog post's<span className="text-secondary">.</span>
                </h2>
              </div>
            </div>
            <div className="">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-[30px] mb-[-30px]">
                <div className="mb-[30px]">
                  <a
                    href="blog-details"
                    className="block overflow-hidden rounded-[6px] mb-[30px]"
                  >
                    <img
                      className="w-full h-full"
                      src="https://htmldemo.net/bery/bery/assets/images/blog/post1.png"
                      width="370"
                      height="270"
                      loading="lazy"
                      alt="Tip’s about Real Estate Recent Conditions from Agent."
                    />
                  </a>
                  <div>
                    <span className="block leading-none font-normal text-[14px] text-secondary mb-[10px] relative before:absolute before:left-0 before:top-1/2 -translate-y-1/2">
                      James Alber on 22 December, 21
                    </span>
                    <h3>
                      <a
                        href="blog-details"
                        className="font-lora text-[22px] xl:text-[24px] leading-[1.285] text-primary block mb-[10px] hover:text-secondary transition-all font-medium"
                      >
                        Tip’s about Real Estate Recent Conditions from Agent.
                      </a>
                    </h3>
                    <p className="font-light text-[#494949] text-[16px] leading-[1.75]">
                      Properties are most budget friendly so you have are
                      opportunity to find are the best the best...
                    </p>
                  </div>
                </div>
                <div className="mb-[30px]">
                  <a
                    href="blog-details"
                    className="block overflow-hidden rounded-[6px] mb-[30px]"
                  >
                    <img
                      className="w-full h-full"
                      src="https://htmldemo.net/bery/bery/assets/images/blog/post1.png"
                      width="370"
                      height="270"
                      loading="lazy"
                      alt="Importance of Build quality of modern Real Estate."
                    />
                  </a>
                  <div>
                    <span className="block leading-none font-normal text-[14px] text-secondary mb-[10px] relative before:absolute before:left-0 before:top-1/2 -translate-y-1/2">
                      Shohel Gyes on 21 December, 21
                    </span>
                    <h3>
                      <a
                        href="blog-details"
                        className="font-lora text-[22px] xl:text-[24px] leading-[1.285] text-primary block mb-[10px] hover:text-secondary transition-all font-medium"
                      >
                        Importance of Build quality of modern Real Estate.
                      </a>
                    </h3>
                    <p className="font-light text-[#494949] text-[16px] leading-[1.75]">
                      Properties are most budget friendly so you have are
                      opportunity to find are the best the best...
                    </p>
                  </div>
                </div>
                <div className="mb-[30px]">
                  <a
                    href="blog-details"
                    className="block overflow-hidden rounded-[6px] mb-[30px]"
                  >
                    <img
                      className="w-full h-full"
                      src="https://htmldemo.net/bery/bery/assets/images/blog/post1.png"
                      width="370"
                      height="270"
                      loading="lazy"
                      alt="Importance of Build quality of modern Real Estate."
                    />
                  </a>
                  <div>
                    <span className="block leading-none font-normal text-[14px] text-secondary mb-[10px] relative before:absolute before:left-0 before:top-1/2 -translate-y-1/2">
                      Shohel Gyes on 21 December, 21
                    </span>
                    <h3>
                      <a
                        href="blog-details"
                        className="font-lora text-[22px] xl:text-[24px] leading-[1.285] text-primary block mb-[10px] hover:text-secondary transition-all font-medium"
                      >
                        Importance of Build quality of modern Real Estate.
                      </a>
                    </h3>
                    <p className="font-light text-[#494949] text-[16px] leading-[1.75]">
                      Properties are most budget friendly so you have are
                      opportunity to find are the best the best...
                    </p>
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
