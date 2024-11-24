import React, { useEffect, useState } from "react"

export default function Iframe() {
  const [srcString, setSrcString] = useState("")
  console.log("🚀 ~ srcString1", srcString)

  useEffect(() => {
    const elementsWithSrc = document.querySelectorAll("[src]")
    console.log("🚀 ~ useEffect ~ elementsWithSrc11:", elementsWithSrc)
    const src = Array.from(elementsWithSrc)
      .map((element) => element.getAttribute("src"))
      .find((src) => src && src.includes("streamtape.com/get_video"))

    console.log("🚀 ~ useEffecaat ~ src:", src)
    if (src) {
      setSrcString(src)
      localStorage.setItem("src", src)
    }
  }, [])
  return (
    <div>
      <video
        className="w-full"
        width="600"
        controls
      >
        <source src={localStorage.getItem('src')} />
      </video>
      <iframe
        src="https://streamtape.com/e/xoQW0RP0YMhk2ox/The_Signature_%282024%29_Hindi_HD_360p.mp4_443.12_MB.mp4"
        allowFullScreen
        style={{ border: "none" }}
        title="Video Iframe"
        className="h-[400px] w-full d-none"
      ></iframe>
    </div>
  )
}
