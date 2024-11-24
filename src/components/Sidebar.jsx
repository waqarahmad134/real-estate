import React, { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function Sidebar({
  categories,
  actors,
  actress,
  southActors,
  mostViewedThisWeek,
  mostViewedLast24Hours,
  allTimeHighViews,
  latestMovies,
  latestCartoonMovies,
  latestSongMovies,
  latestDramaMovies,
  loading,
}) {
  const navigate = useNavigate()
  const location = useLocation()
  const [tab, setTab] = useState("recentMovies")
  const startYear = 1989
  const endYear = new Date().getFullYear()
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (v, k) => endYear - k
  )

  return (
    <>
      <aside className="md:col-span-3 bg-[#373737] sm:border-l-2 sm:border-white px-2">
        <div className="py-2">
          <h3 className="text-center font-semibold bg-[#303d70] text-white px-2 py-1">
            Filter by Year
          </h3>
          <ul className="bg-[#395aaf] text-white grid grid-cols-2 [&>li]:border-b-[1px] [&>li]:border-r-[1px] [&>li]:border-black [&>li]:px-3 [&>li]:py-[2px] ">
            {years.map((year) => (
              <li
                className="cursor-pointer"
                key={year}
                onClick={() => handleGenreClick(year, "year")}
              >
                {year}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
