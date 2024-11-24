import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { imgURL } from "../../utilities/URL"
import { FaPlayCircle } from "react-icons/fa"
import axios from "axios"

export default function Card4(props) {
  const currentUrl = window.location.href
  const lastSegment = currentUrl.split("/").pop()

  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + "..."
  }
  const navigate = useNavigate()

  const handleMovieDetail = async () => {
    try {
      // props.setLoading(true)
      const response = axios.get(
        `https://server.videosroom.com/getVideoSrc/${props?.id}`
      )
      navigate(`/movie/${props?.id}`)
      // const dataVideo = response.data
      // if (dataVideo) {
      //   navigate(`/movie/${props?.id}`, { state: { dataVideo } })
      // } else {
      //   navigate(`/movie/${props?.id}`)
      // }
    } catch (error) {
      console.error("Error fetching video source:", error)
      navigate(`/movie/${props?.id}`)
    }
  }

  return (
    <>
      <button
        onClick={handleMovieDetail}
        className="bg-[#395aaf] relative text-white border-2 border-transparent p-1 sm:p-2 cursor-pointer hover:bg-[#303d70] hover:border-2 hover:border-yellow-200"
      >
        <div>
          <div
            className={`${
              lastSegment === "search" ? "h-[105px]" : "h-auto"
            } sm:h-[123px] sm:max-h-[123px]`}
          >
            <img
              src={`${imgURL}${props?.img}`}
              alt="Movie poster"
              className="w-full h-full object-cover object-center mb-2"
            />
          </div>
          <div className="mt-3 flex gap-2 w-full">
            <div className="bg-white h-[36px] w-[36px] min-w-[36px] max-w-[36px] rounded-full">
              <img src={"cardIcon"} alt="icon" className="h-full w-full p-1" />
            </div>
            <div className="w-full">
              <h3
                className={` ${
                  lastSegment === "search" ? "text-sm" : "text-[15px]"
                } text-start leading-4 sm:leading-tight line-clamp-2 h-auto `}
              >
                {truncateString(props?.title, 45)}
              </h3>
              <div className="text-sm flex items-center justify-between">
                <p className="text-sm">Videos Room</p>
                <p className="text-xs">Views : {props?.views}</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </>
  )
}
