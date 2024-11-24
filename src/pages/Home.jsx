import React, { useEffect, useState } from "react"
import DefaultLayout from "../Layout/DefaultLayout"
import { BASE_URL, imgURL } from "../utilities/URL"
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import Newsletter from "../components/Newsletter"

export default function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchMovies = async (page) => {
    try {
      const response = await axios.get(`${BASE_URL}`)
      setData(response?.data?.data?.data)
    } catch (error) {
      console.error("Error fetching movies:", error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return loading ? (
    <div className="loader-container">
      <Loader />
    </div>
  ) : (
    <>
      <DefaultLayout>
        <main className="md:col-span-9 p-3 sm:p-3">
          <div>
            <a
              id="scrollUp"
              className="w-12 h-12 rounded-full bg-primary text-white fixed right-5 bottom-16 flex flex-wrap items-center justify-center transition-all duration-300 z-10"
              href="#"
              aria-label="scroll up"
            >
              <svg
                width="25"
                height="25"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M6.101 261.899L25.9 281.698c4.686 4.686 12.284 4.686 16.971 0L198 126.568V468c0 6.627 5.373 12 12 12h28c6.627 0 12-5.373 12-12V126.568l155.13 155.13c4.686 4.686 12.284 4.686 16.971 0l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L232.485 35.515c-4.686-4.686-12.284-4.686-16.971 0L6.101 244.929c-4.687 4.686-4.687 12.284 0 16.97z" />
              </svg>
            </a>
          </div>
        </main>
      </DefaultLayout>
    </>
  )
}
