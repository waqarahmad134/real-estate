import React, { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import { useLocation } from "react-router-dom"
import { useDataContext } from "../context/DataContext"
import Newsletter from "../components/Newsletter"
import BlogSection from "../components/BlogSection"
import Team from "../components/Team"
import ExploreCities from "../components/ExploreCities"
import Tour from "../components/Tour"
import HeroSection from "../components/HeroSection"
import Card1 from "../components/cards/Card1"

const DefaultLayout = React.memo(({ children, onLogoClick }) => {
  const location = useLocation()
  const {
    categories,
    actors,
    actresses,
    southActors,
    mostViewedThisWeek,
    mostViewedLast24Hours,
    allTimeHighViews,
    latestMovies,
    latestCartoonMovies,
    latestSongMovies,
    latestDramaMovies,
    loading,
  } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location?.pathname])

  return (
    <div className="max-w-[1400px] mx-auto">
      <Header categories={categories} onLogoClick={onLogoClick} />
      <div className="sm:grid md:grid-cols-12 gap-4 md:gap-0">{children}</div>
      <HeroSection />
      <div className="py-10 relative">
        <div className="text-center text-3xl ">
          <h2 className="font-lora text-primary text-3xl capitalize font-medium mb-14">
            Popular Properties<span className="text-secondary"></span>
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-10 mx-10 ">
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
      </div>
      <Tour />
      {/* <ExploreCities/> */}
      <Team />
      <BlogSection />
      <Newsletter />

      <Footer />
    </div>
  )
})

export default DefaultLayout
