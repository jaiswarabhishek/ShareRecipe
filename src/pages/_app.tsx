import "@/styles/globals.css"

import { AppProps } from "next/app"
import { useState, useEffect } from "react"
import Preloader from "@/components/Preloaders"
import { AnimatePresence, motion, Spring } from "framer-motion"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000) // Simulate a 3-second loading time, replace with your actual data fetching logic
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <AnimatePresence mode="wait">
          <motion.div key={router.route}>
            <motion.div
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
                position: "fixed",
                width: "100vw",
                zIndex: 1000,
                top: 0,
              }}
              transition={transitionSpringPhysics}
              initial={{ height: "100vh" }}
              animate={{ height: "0vh", transition: { delay: 0.2 } }}
            />{" "}
            <Component {...pageProps} />{" "}
          </motion.div>
        </AnimatePresence>
      )}{" "}
    </>
  )
}

export default MyApp
