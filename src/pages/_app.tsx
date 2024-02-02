import "@/styles/globals.css"

import { AppProps } from "next/app"
import { useState, useEffect } from "react"
import Preloader from "@/components/Preloaders"
import { AnimatePresence, motion, Spring } from "framer-motion"
import { useRouter } from "next/router"
import { Metadata } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: {
    default: "ShareRecipe",
    template: "%s - ShareRecipe",
  },
  description:
    "Unleash your culinary creativity with ShareRecipe - where every recipe is a journey and every dish tells a story.",
  keywords: ["recipe", "food", "cooking", "cuisine", "culinary"],

  openGraph: {
    title: "ShareRecipe",
    description:
      "Unleash your culinary creativity with ShareRecipe - where every recipe is a journey and every dish tells a story.",
    url: "https://sharerecipe.vercel.app",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ShareRecipe",
      },
    ],
  },
}

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
      <Head>
        <title>ShareRecipe</title>
        <meta
          name="description"
          content={
            "Unleash your culinary creativity with ShareRecipe - where every recipe is a journey and every dish tells a story."
          }
        />
        <meta
          name="keywords"
          content={"recipe, food, cooking, cuisine, culinary"}
        />
        <meta property="og:title" content={"ShareRecipe"} />
        <meta
          property="og:description"
          content={
            "Unleash your culinary creativity with ShareRecipe - where every recipe is a journey and every dish tells a story."
          }
        />
        <meta property="og:url" content={"https://sharerecipe.vercel.app"} />
        <meta
          property="og:image"
          content={
            "https://res.cloudinary.com/dfutvewou/image/upload/v1706905256/openleaf/ShareRecipe_gtbf13.png"
          }
        />
        <meta property="og:image:width" content={"1200"} />
        <meta property="og:image:height" content={"630"} />
        <meta property="og:image:alt" content={"ShareRecipe"} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="ShareRecipe" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sharerecipe" />
        <meta name="twitter:creator" content="@sharerecipe" />
        <meta name="twitter:title" content={"ShareRecipe"} />
        <meta
          name="twitter:description"
          content={
            "Unleash your culinary creativity with ShareRecipe - where every recipe is a journey and every dish tells a story."
          }
        />
        <meta
          name="twitter:image"
          content={
            "https://res.cloudinary.com/dfutvewou/image/upload/v1706905256/openleaf/ShareRecipe_gtbf13.png"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
