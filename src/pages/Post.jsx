import React, { useState, useEffect, useRef } from "react"
import { useLocation, useParams } from "react-router-dom"
import GetAPI from "../utilities/GetAPI"
import { BASE_URL, imgURL } from "../utilities/URL"
import DefaultLayout from "../Layout/DefaultLayout"
import { Helmet } from "react-helmet-async"
import { PostAPI } from "../utilities/PostAPI"
import { info_toaster, success_toaster } from "../utilities/Toaster"
import watermark from "../Images/watermark.png"
import axios from "axios"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"
import Loader from "../components/Loader"
import gif1 from "../Images/countdown1.gif"
import { FaPlayCircle } from "react-icons/fa"
import Social from "../components/Social"

export default function Post() {
  const { slug } = useParams()
  console.log("🚀 ~ Post ~ slug:", slug)
  const location = useLocation()
  const InstantData = location.state?.dataVideo
  const currentUrl = window.location.href
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [movieData, setMovieData] = useState(null)
  const [videoPlay, setVideoPlay] = useState(true)
  const [issue, setIssue] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [specificMovieModal, setSpecificMovieModal] = useState(false)
  const [modelFrame, setModelFrame] = useState(null)
  const [newData, setNewData] = useState(false)
  const [doodliDynamic, setDoodliDynamic] = useState(true)

  // Auto modal open on page laod
  // useEffect(() => {
  //   setIsOpen(true)
  // }, [])
  useEffect(() => {}, [modelFrame])
  const onClose = () => {
    setIsOpen(false)
  }
  const onMovieModelClose = () => {
    setSpecificMovieModal(false)
  }

  const [complain, setComplain] = useState({
    issue: "",
    name: "",
    email: "",
    detail: "",
  })

  const [gif, setGif] = useState(true)

  // useEffect(() => {
  //   if (movieData?.iframe_link2?.includes("cloudatacdn")) {
  //     setDoodliDynamic(false);
  //   } else {
  //     const countdown = () => {
  //       let count = 20;
  //       const interval = setInterval(() => {
  //         if (count === 1) {
  //           setDoodliDynamic(false);
  //           clearInterval(interval);
  //         }
  //         count--;
  //       }, 1000);
  //     };

  //     countdown();
  //   }
  // }, []);

  const secondDivRef = useRef(null)
  const scrollToSecondDiv = () => {
    setIssue(true)
    secondDivRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const videoRef = useRef(null)
  const handlePlayVideo = () => {
    const videoElement = videoRef.current
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Error trying to play the video:", error)
      })
      setVideoPlay(false)
    }
  }

  const onChange = (e) => {
    setComplain({ ...complain, [e.target.name]: e.target.value })
  }

  const handleReport = async (e) => {
    e.preventDefault()
    const { issue, name, email, detail } = complain
    if (name === "") {
      info_toaster("Please Enter Name")
    } else {
      try {
        let res = await PostAPI("complaints", {
          name: name,
          email: email,
          issue: issue,
          detail: detail,
          movieTitle: movieData?.title || "",
        })
        if (res?.data?.status === true) {
          success_toaster(res?.data?.message)
          setComplain({
            issue: "",
            name: "",
            email: "",
            detail: "",
          })
        } else {
          info_toaster(res?.data?.error?.detail?.[0])
        }
      } catch (error) {
        console.error(error)
        info_toaster("An error occurred")
      }
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}movie/${slug}`)
      setMovieData(response?.data?.data)
      console.log("🚀 ~ fetchData ~ response:", response?.data?.data)
      if (response?.data?.data?.iframe_link2?.includes("cloudatacdn")) {
        setDoodliDynamic(false)
      } else {
        const countdown = () => {
          let count = 20
          const interval = setInterval(() => {
            if (count === 1) {
              setDoodliDynamic(false)
              clearInterval(interval)
            }
            count--
          }, 1000)
        }

        countdown()
      }

      console.log("waqar", response?.data?.data?.iframe_link2)
    } catch (err) {
      setError("Failed to fetch movie data.")
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (movieData && slug) {
      window.location.reload();
    } else {
      fetchData();
    }
  }, [slug, newData])

  const videoSrc = encodeURI(movieData?.iframe_link2)

  if (loading) {
    return (
      <div className="loader-container">
        <Loader />
      </div>
    )
  } else
    return (
      <>
        <Helmet>
          <meta http-equiv="Permissions-Policy" content="fullscreen=(self)" />
          <title>{movieData?.title}</title>
          <meta
            name="description"
            content={movieData?.meta_description?.substring(0, 155)}
          />
        </Helmet>

        <Modal isOpen={isOpen} size="xl" onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            {gif ? (
              <img src={gif1} alt="" />
            ) : (
              <>
                <div className="flex items-center mx-4">
                  <div className="bg-[#7e94ee] p-1 rounded-md">
                    <ModalCloseButton />
                  </div>
                  <h3 className="m-2 sm:m-4 line-clamp-1 w-11/12">
                    {movieData?.title || "Videos Room Movie"}
                  </h3>
                </div>

                <ModalBody padding={2}>
                  <div className="w-full ">
                    {movieData?.iframe_link2?.includes("cloudatacdn") ? (
                      <div className="relative">
                        <video
                          ref={videoRef}
                          className="w-full h-full"
                          width="600"
                          controls
                          poster={`https://backend.videosroom.com/public/thumbnail/${movieData?.thumbnail}`}
                        >
                          <source src={movieData?.iframe_link2} />
                        </video>
                        {videoPlay && (
                          <div
                            onClick={handlePlayVideo}
                            className="hidden sm:flex absolute top-0 left-0 z-10 h-full w-full bg-[#00000054]  items-center justify-center"
                          >
                            <FaPlayCircle
                              className="flex justify-center items-center"
                              size={80}
                            />
                          </div>
                        )}
                      </div>
                    ) : movieData?.iframe_link4 ? (
                      <iframe
                        src={movieData?.iframe_link4}
                        allowFullScreen
                        style={{ border: "none" }}
                        title="Video Iframe"
                        sandbox="allow-scripts allow-same-origin"
                        className="h-[400px] w-full"
                      ></iframe>
                    ) : (
                      <iframe
                        src={movieData?.iframe_link5}
                        allowFullScreen
                        style={{ border: "none" }}
                        title="Video Iframe"
                        sandbox="allow-scripts allow-same-origin"
                        className="h-[400px] w-full"
                      ></iframe>
                    )}
                    {/* {movieData?.iframe_link3 && (
                      <div className="relative">
                        <video
                          ref={videoRef}
                          className="w-full"
                          width="600"
                          controls
                          poster={`https://backend.videosroom.com/public/thumbnail/${movieData?.thumbnail}`}
                        >
                          <source src={movieData.iframe_link3} />
                        </video>
                        <div className="flex justify-center absolute z-10 bottom-16 select-none">
                          <img
                            src={watermark}
                            className="w-1/2 select-none"
                            alt="watermark"
                          />
                        </div>
                        {videoPlay && (
                          <div
                            onClick={handlePlayVideo}
                            className="hidden sm:flex absolute top-0 left-0 z-10 h-full w-full bg-[#00000054]  items-center justify-center"
                          >
                            <FaPlayCircle
                              className="flex justify-center items-center"
                              size={80}
                            />
                          </div>
                        )}
                      </div>
                    )} */}
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>

        <Modal
          isOpen={specificMovieModal}
          size="xl"
          onClose={onMovieModelClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <div className="flex items-center mx-4">
              <div className="bg-[#7e94ee] p-1 rounded-md">
                <ModalCloseButton />
              </div>
              <h3 className="m-2 sm:m-4 line-clamp-1 w-11/12">
                {movieData?.title}
              </h3>
            </div>
            <ModalBody padding={2}>
              <div className="w-full">
                {modelFrame?.includes("cloudatacdn") ? (
                  <video
                    className="w-full h-full"
                    width="600"
                    controls
                    poster={`https://backend.videosroom.com/public/thumbnail/${movieData?.thumbnail}`}
                  >
                    <source src={movieData.iframe_link2} />
                  </video>
                ) : (
                  <iframe
                    src={modelFrame}
                    allowFullScreen
                    style={{ border: "none" }}
                    title="Video Iframe"
                    sandbox="allow-scripts allow-same-origin"
                    className="h-[400px] w-full"
                  ></iframe>
                )}
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>

        <DefaultLayout>
          <main className="md:col-span-9 p-3 bg-[#373737]">
            <div className="relative">
              <div
                style={{
                  background: `url(${imgURL}${movieData?.thumbnail})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-0 h-full w-full waqar"></div>
                <div className="h-full">
                  <div className="relative p-4 sm:p-16 w-11/12 sm:w-3/4 text-white">
                    <h2 className="text-base sm:text-2xl font-bold mb-4">
                      {movieData?.title}
                    </h2>
                    <div className="flex items-center gap-2 text-sm">
                      <p className="font-semibold">2024</p>
                      <span className="bg-transparent border border-white  text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
                        Movie
                      </span>
                      <p className=" font-semibold">
                        {movieData?.duration || "2h 32m"}
                      </p>
                    </div>
                    <div className="py-3 font-light">
                      <b className="hidden sm:block">
                        {movieData?.description?.length > 100
                          ? movieData?.description?.slice(0, 236) + "..."
                          : movieData?.description}
                      </b>
                      <b className="block sm:hidden">
                        {movieData?.description?.length > 100
                          ? movieData?.description?.slice(0, 140) + "..."
                          : movieData?.description}
                      </b>
                    </div>
                    <div>
                      <h4>
                        <b>Added on: </b>
                        {movieData?.year || "2024"}
                      </h4>
                      <h4>
                        <b>Views :</b> {movieData?.views}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 text-white text-center bg-[#de1212] border border-white text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow">
              <button onClick={scrollToSecondDiv}>
                <span>Click Here To Report </span>
                <span className="hidden sm:inline">
                  If Video Not Working OR Bad Video Quality OR Any Other Issue
                </span>
              </button>
            </div>
            <div className="my-5">
              <div>
                {movieData?.images?.map((data, index) => (
                  <div
                    className="h-auto w-full object-contain mb-2 sm:mb-4 overflow-hidden"
                    key={index}
                  >
                    <img
                      src={`https://backend.videosroom.com/public/images/${data?.url}`}
                      alt={index}
                      className="4/5 m-auto"
                    />
                  </div>
                ))}
              </div>
              <div className="[&>div]:mb-10 my-3">
                <div className="w-full">
                  {doodliDynamic ? (
                    <div className="h-56 sm:h-96 relative flex items-center justify-center bg-black bg-opacity-50">
                      <div>
                        <Loader />
                        <p className="text-[#ffd25e] mt-5">
                          Please wait video is processing
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {movieData?.iframe_link2?.includes("cloudatacdn") && (
                        <>
                          <div className="flex flex-col items-center justify-between sm:flex-row gap-2 mb-5">
                            <div className="flex flex-col sm:flex-row gap-2">
                              <button
                                onClick={() => {
                                  setSpecificMovieModal(true),
                                    setModelFrame(movieData?.iframe_link2)
                                }}
                                className="text-white text-center bg-[#395aaf] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                              >
                                Watch Online
                              </button>
                              <a
                                className="text-white text-center bg-[#de1212] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                                href={movieData?.download_link2}
                                target="_blank"
                              >
                                Download Now
                              </a>
                              <a
                                className="text-white text-center bg-[#9092e4] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                                href="https://chikraighotoops.com/4/8443520"
                                target="_blank"
                              >
                                Advertisement
                              </a>
                            </div>
                            <Social
                              currentUrl={currentUrl}
                              title={movieData?.title}
                            />
                          </div>
                          
                          <div className="relative">
                            <div className="bg-black h-[400px] flex items-center">
                              <video
                                className="w-full h-full"
                                width="600"
                                controls
                                playsInline
                                webkit-playsinline="true"
                                poster={`https://backend.videosroom.com/public/thumbnail/${movieData?.thumbnail}`}
                              >
                                <source
                                  src={movieData.iframe_link2}
                                />
                              </video>
                            </div>
                            {/* {videoPlay && (
                              <div
                                onClick={() => {
                                  setNewData(true)
                                  setVideoPlay(false)
                                }}
                                className="hidden sm:flex absolute top-0 left-0 z-10 h-full w-full bg-black bg-opacity-50 items-center justify-center"
                              >
                                <FaPlayCircle
                                  className="flex justify-center items-center"
                                  size={80}
                                />
                              </div>
                            )} */}
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>

                <div className="w-full">
                  {movieData?.iframe_link3?.includes(
                    "streamtape.com/get_video"
                  ) && (
                    <>
                      <div className="flex flex-col items-center justify-between sm:flex-row gap-2 mb-5">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <button
                            onClick={() => {
                              setSpecificMovieModal(true),
                                setModelFrame(movieData?.iframe_link3)
                            }}
                            className="text-white text-center bg-[#395aaf] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                          >
                            Watch Online
                          </button>
                          <a
                            className="text-white text-center bg-[#de1212] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            href={movieData?.download_link3}
                            target="_blank"
                          >
                            Download Now
                          </a>
                          <a
                            className="text-white text-center bg-[#9092e4] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            href="https://chikraighotoops.com/4/8443518"
                            target="_blank"
                          >
                            Advertisement
                          </a>
                        </div>
                        <Social
                          currentUrl={currentUrl}
                          title={movieData?.title}
                        />
                      </div>
                      <div className="bg-black h-[400px] flex items-center">
                        <video
                          key={movieData?.iframe_link3}
                          className="w-full h-full"
                          width="600"
                          controls
                          poster={`https://backend.videosroom.com/public/thumbnail/${movieData?.thumbnail}`}
                        >
                          <source src={movieData.iframe_link3} />
                        </video>
                      </div>
                    </>
                  )}
                </div>

                <div className="w-full">
                  {movieData?.iframe_link5 ? (
                    <>
                      <div className="flex flex-col items-center justify-between sm:flex-row gap-2 mb-5">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <button
                            onClick={() => {
                              setSpecificMovieModal(true),
                                setModelFrame(movieData?.iframe_link5)
                            }}
                            className="text-white text-center bg-[#395aaf] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                          >
                            Watch Online
                          </button>
                          <a
                            className="text-white text-center bg-[#de1212] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            href={movieData?.download_link5}
                            target="_blank"
                          >
                            Download Now
                          </a>
                          <a
                            className="text-white text-center bg-[#9092e4] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            href="https://chikraighotoops.com/4/8443517"
                            target="_blank"
                          >
                            Advertisement
                          </a>
                        </div>
                        <Social
                          currentUrl={currentUrl}
                          title={movieData?.title}
                        />
                      </div>

                      <iframe
                        src={movieData?.iframe_link5}
                        allowFullScreen
                        title="Video Iframe"
                        className="h-[400px] w-full"
                        // sandbox=""
                      ></iframe>
                    </>
                  ) : (
                    <p>{movieData?.iframe_link5}</p>
                  )}
                </div>

                <div className="w-full">
                  {movieData?.iframe_link4 ? (
                    <>
                      <div className="flex flex-col items-center justify-between sm:flex-row gap-2 mb-5">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <button
                            onClick={() => {
                              setSpecificMovieModal(true),
                                setModelFrame(movieData?.iframe_link4)
                            }}
                            className="text-white text-center bg-[#395aaf] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                          >
                            Watch Online
                          </button>
                          <a
                            className="text-white text-center bg-[#de1212] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            href={movieData?.download_link4}
                            target="_blank"
                          >
                            Download Now
                          </a>
                          <a
                            className="text-white text-center bg-[#9092e4] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            href="https://chikraighotoops.com/4/8443519"
                            target="_blank"
                          >
                            Advertisement
                          </a>
                        </div>
                        <Social
                          currentUrl={currentUrl}
                          title={movieData?.title}
                        />
                      </div>

                      <iframe
                        src={movieData?.iframe_link4}
                        allowFullScreen
                        style={{ border: "none" }}
                        title="Video Iframe"
                        // sandbox="allow-scripts allow-same-origin"
                        className="h-[400px] w-full"
                      ></iframe>
                    </>
                  ) : (
                    <p>{movieData?.iframe_link4}</p>
                  )}
                </div>

                <div className="w-full">
                  {movieData?.iframe_link2?.includes("dood") && (
                    <>
                      <div className="flex flex-col items-center justify-between sm:flex-row gap-2 mb-5">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <button
                            onClick={() => {
                              setSpecificMovieModal(true),
                                setModelFrame(movieData?.iframe_link2)
                            }}
                            className="text-white text-center bg-[#395aaf] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                          >
                            Watch Online
                          </button>
                          <a
                            className="text-white text-center bg-[#de1212] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            href={movieData?.download_link2}
                            target="_blank"
                          >
                            Download Now
                          </a>
                          <a
                            className="text-white text-center bg-[#9092e4] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            href="https://chikraighotoops.com/4/8443520"
                            target="_blank"
                          >
                            Advertisement
                          </a>
                        </div>
                        <Social
                          currentUrl={currentUrl}
                          title={movieData?.title}
                        />
                      </div>
                      <iframe
                        src={movieData?.iframe_link2}
                        allowFullScreen
                        style={{ border: "none" }}
                        title="Video Iframe"
                        className="h-[400px] w-full"
                      ></iframe>
                    </>
                  )}
                </div>

                <div className="w-full">
                  {movieData?.iframe_link3?.includes("streamtape.com/e") ||
                  movieData?.iframe_link3?.includes("streamtape.com/v") ? (
                    <>
                      <div className="flex flex-col items-center justify-between sm:flex-row gap-2 mb-5">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <button
                            onClick={() => {
                              setSpecificMovieModal(true),
                                setModelFrame(movieData?.iframe_link3)
                            }}
                            className="text-white text-center bg-[#395aaf] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                          >
                            Watch Online
                          </button>
                          <a
                            className="text-white text-center bg-[#de1212] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            href={movieData?.download_link3}
                            target="_blank"
                          >
                            Download Now
                          </a>
                          <a
                            className="text-white text-center bg-[#9092e4] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            href="https://chikraighotoops.com/4/8443518"
                            target="_blank"
                          >
                            Advertisement
                          </a>
                        </div>
                        <Social
                          currentUrl={currentUrl}
                          title={movieData?.title}
                        />
                      </div>
                      <iframe
                        src={movieData?.iframe_link3}
                        allowFullScreen
                        style={{ border: "none" }}
                        title="Video Iframe"
                        className="h-[400px] w-full"
                      ></iframe>
                    </>
                  ) : (
                    ""
                  )}
                </div>

                <div className="w-full">
                  {movieData?.iframe_link6 ? (
                    <>
                      <div className="relative">
                        <div className="flex flex-col items-center justify-between sm:flex-row gap-2 mb-5">
                          <div className="flex flex-col sm:flex-row gap-2">
                            <button
                              onClick={() => {
                                setSpecificMovieModal(true),
                                  setModelFrame(movieData?.iframe_link3)
                              }}
                              className="text-white text-center bg-[#395aaf] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                            >
                              Watch Online
                            </button>
                            <a
                              className="text-white text-center bg-[#de1212] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                              href={movieData?.download_link3}
                              target="_blank"
                            >
                              Download Now
                            </a>
                            <a
                              className="text-white text-center bg-[#9092e4] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow"
                              href="https://chikraighotoops.com/4/8443518"
                              target="_blank"
                            >
                              Advertisement
                            </a>
                          </div>
                          <Social
                            currentUrl={currentUrl}
                            title={movieData?.title}
                          />
                        </div>
                        {movieData?.iframe_link6.includes("s-gra") || movieData?.iframe_link6.includes("veevcdn")  || movieData?.iframe_link6.includes("https://s-") ? (
                          <div className="bg-black h-[400px] flex items-center">
                            <video
                              className="w-full h-full"
                              width="600"
                              controls
                              poster={`https://backend.videosroom.com/public/thumbnail/${movieData?.thumbnail}`}
                            >
                              <source src={movieData.iframe_link6} />
                            </video>
                          </div>
                        ) : (
                          <iframe
                            src={movieData?.iframe_link6}
                            allowFullScreen
                            style={{ border: "none" }}
                            title="Video Iframe"
                            className="h-[400px] w-full"
                          ></iframe>
                        )}
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="mb-3 text-white text-center bg-[#de1212] text-sm rounded-full py-2 px-8 shadow-themeShadow hover:shadow">
                <button
                  onClick={() => {
                    setIssue(!issue)
                  }}
                >
                  Click Here To Report If Video Not Working OR Bad Video Quality
                  OR Any Other Issue
                </button>
              </div>
              {issue && (
                <div
                  ref={secondDivRef}
                  className="bg-gray-100 border-t-4 border-red-500 my-5"
                >
                  <form onSubmit={handleReport} className="p-5">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Select an option
                        </label>
                        <select
                          value={complain?.issue}
                          onChange={onChange}
                          name="issue"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option>Choose Issue</option>
                          <option value="Movie Not Working">
                            Movie Not Working
                          </option>
                          <option value="Downlaod Link Not Working">
                            Downlaod Link Not Working
                          </option>
                          <option value="Player Are Deleted">
                            Player Are Deleted
                          </option>
                          <option value="Slow Buffering Speed">
                            Slow Buffering Speed
                          </option>
                          <option value="Other">Other</option>
                        </select>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your name
                          </label>
                          <input
                            value={complain?.name}
                            onChange={onChange}
                            name="name"
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Your Email
                          </label>
                          <input
                            value={complain?.email}
                            onChange={onChange}
                            name="email"
                            type="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Details
                        </label>
                        <textarea
                          value={complain?.detail}
                          onChange={onChange}
                          name="detail"
                          rows="8"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                      </div>
                    </div>
                    <div className="bg-red-600 p-2 text-center text-white mt-5">
                      <button className="w-full" type="submit">
                        Submit Report
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </main>
        </DefaultLayout>
      </>
    )
}
