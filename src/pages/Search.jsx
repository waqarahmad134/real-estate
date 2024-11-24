import React, { useEffect, useState } from "react";
import Card4 from "../components/cards/Card4";
import DefaultLayout from "../Layout/DefaultLayout";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const handleStorageChange = () => {
      setSearchResults(JSON.parse(localStorage.getItem("searchResults")) || []);
    };

    handleStorageChange();
    window.addEventListener("storageChange", handleStorageChange);

    return () => {
      window.removeEventListener("storageChange", handleStorageChange);
    };
  }, []);

  return (
    <DefaultLayout>
      <main className="md:col-span-9 p-3 bg-[#373737]">
        <h2 className="text-2xl font-bold text-white mb-4">Searched Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2">
          {searchResults.length > 0 ? (
            searchResults.map((item, index) => (
              <Card4
                key={index}
                id={item?.id}
                slug={item?.slug}
                title={item?.title}
                img={item?.thumbnail}
                duration={item?.duration}
                views={item?.views}
              />
            ))
          ) : (
            <p className="text-white">No Data Available</p>
          )}
        </div>
      </main>
    </DefaultLayout>
  );
}
