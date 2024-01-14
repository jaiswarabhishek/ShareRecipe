import "@/styles/globals.css"

import { AppProps } from "next/app"
import { useState, useEffect } from "react"
import Preloader from "@/components/Preloaders"
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // Simulate a 3-second loading time, replace with your actual data fetching logic
    return () => clearTimeout(timer)
  }, [])

  return <>{loading ? <Preloader /> : <Component {...pageProps} />}</>
}

export default MyApp
