import React, { useEffect, useState, useCallback } from "react"
import axios from "axios"
import { useLocation, useParams } from "react-router-dom"
import Card4 from "../components/cards/Card4"
import { BASE_URL } from "../utilities/URL"
import DefaultLayout from "../Layout/DefaultLayout"

export default function Genre() {
  const formatId = (id) => {
    return id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }
  const location = useLocation()
  const { categories, Id } = useParams()
  const formattedId = formatId(Id)

  const [movies, setMovies] = useState([])
  const [name, setName] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [lastPage, setLastPage] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location?.pathname])

  const fetchMoviesByGenre = useCallback(async () => {
    setLoading(true)
    try {
      const response = await axios.get(
        `${BASE_URL}${categories}/${formattedId}?page=${currentPage}`
      )
      console.log("🚀 ~ fetchMoviesByGenre ~ response:", response?.data?.data)
      if (categories === "year") {
        setMovies(response?.data?.data?.data)
        setLastPage(response?.data?.data?.last_page)
      } else {
        setMovies(response?.data?.data?.movies?.data)
        setLastPage(response?.data?.data?.movies?.last_page)
      }
      if(response?.data?.data?.category?.name === name){
        setName(response?.data?.data?.category?.name)
      }
      else{
        setName(response?.data?.data?.category?.name)
        setCurrentPage(1)
      }
    } catch (error) {
      console.error("Error fetching movies:", error)
    } finally {
      setLoading(false)
    }
  }, [BASE_URL, categories, Id , currentPage])

  useEffect(() => {
    fetchMoviesByGenre()
  }, [fetchMoviesByGenre])

  const onPageChange = (page) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setCurrentPage(page)
  }

  const resetPage = () => {
    setCurrentPage(1)
  }

  const renderPagination = () => {
    const pageNumbers = []
    const maxVisiblePages = 12
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = startPage + maxVisiblePages - 1

    if (endPage > lastPage) {
      endPage = lastPage
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }

    return (
      <nav className="">
        <ul className="flex flex-wrap justify-center items-center gap-1 text-sm pt-6">
          <li>
            <button className="flex items-center justify-center px-2 h-6 ms-0 text-white border border-transparent border-[#282828] bg-[#5d5c61] hover:text-black ">
              Page {currentPage} of {lastPage}
            </button>
          </li>

          {pageNumbers.map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`flex items-center justify-center px-2 h-6  border border-[#282828] bg-[#5d5c61] hover:text-black ${
                  page === currentPage ? "text-black" : "text-white"
                }`}
              >
                {page}
              </button>
            </li>
          ))}

          {endPage < lastPage && (
            <>
              <li>
                <span className="flex items-center justify-center px-2 h-6 text-white border border-transparent hover:text-black">
                  ...
                </span>
              </li>
              <li>
                <button
                  onClick={() => onPageChange(lastPage)}
                  className="flex items-center justify-center px-2 h-6 text-white border border-[#282828] bg-[#5d5c61]"
                >
                  Last Page
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    )
  }

  return (
    <>
      <DefaultLayout onLogoClick={resetPage}>
        <main className="md:col-span-9 p-3 sm:p-4 bg-[#373737]">
          <h2 className="text-2xl text-white mb-4">
            Movies By{" "}
            <strong className="capitalize">{categories || "Categories"}</strong>
            &nbsp; | {name ?? Id}
          </h2>

          {loading ? (
            <div className="h-[60vh] flex items-center justify-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {movies?.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                    {movies?.map((movie, index) => (
                      <Card4
                        key={index}
                        id={movie.id}
                        slug={movie.slug}
                        title={movie.title}
                        img={movie?.thumbnail}
                        duration={movie?.duration}
                        views={movie?.views}
                      />
                    ))}
                  </div>
                  {renderPagination()}
                </>
              ) : (
                <h3 className="text-3xl text-white">No Data</h3>
              )}
            </>
          )}
        </main>
      </DefaultLayout>
    </>
  )
}
