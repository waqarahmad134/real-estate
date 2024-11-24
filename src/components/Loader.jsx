import React from "react"


export default function Loader() {
  return (
    <>
      <div className="loader">
        <div className="loader__container">
          <div className="loader__film">
            <img
              className="loader__film-img"
              src={"film"}
              alt=""
            />
            <img
              className="loader__film-img"
              src={"film"}
              alt=""
            />
          </div>
          <img
            className="loader__camera"
            src={"camera"}
            alt=""
          />
        </div>
      </div>
    </>
  )
}
