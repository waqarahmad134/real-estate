import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utilities/URL";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [actors, setActors] = useState(null);
  const [actresses, setActresses] = useState(null);
  const [southActors, setSouthActors] = useState(null);
  const [mostViewedThisWeek, setMostViewedThisWeek] = useState(null);
  const [mostViewedLast24Hours, setMostViewedLast24Hours] = useState(null);
  const [allTimeHighViews, setAllTimeHighViews] = useState(null);
  const [latestMovies, setLatestMovies] = useState(null);
  const [latestCartoonMovies, setLatestCartoonMovies] = useState(null);
  const [latestSongMovies, setLatestSongMovies] = useState(null);
  const [latestDramaMovies, setLatestDramaMovies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, actorsRes, actressesRes, southActorsRes, mostViewedRes , mostViewedLast24Hours , allTimeHighViews , latestMovies , latestCartoonMovies , latestSongMovies , latestDramaMovies] = await Promise.all([
          axios.get(`${BASE_URL}categories`),
          axios.get(`${BASE_URL}actors`),
          axios.get(`${BASE_URL}actress`),
          axios.get(`${BASE_URL}southactor`),
          axios.get(`${BASE_URL}mostViewedThisWeek`),
          axios.get(`${BASE_URL}mostViewedLast24Hours`),
          axios.get(`${BASE_URL}allTimeHighViews`),
          axios.get(`${BASE_URL}latestMovies`),
          axios.get(`${BASE_URL}latestCartoonMovies`),
          axios.get(`${BASE_URL}latestSongMovies`),
          axios.get(`${BASE_URL}latestDramaMovies`),
        ]);

        setCategories(categoriesRes.data);
        setActors(actorsRes.data);
        setActresses(actressesRes.data);
        setSouthActors(southActorsRes.data);
        setMostViewedThisWeek(mostViewedRes.data);
        setMostViewedLast24Hours(mostViewedLast24Hours.data);
        setAllTimeHighViews(allTimeHighViews.data);
        setLatestMovies(latestMovies.data);
        setLatestCartoonMovies(latestCartoonMovies.data)
        setLatestSongMovies(latestSongMovies.data)
        setLatestDramaMovies(latestDramaMovies.data)
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
