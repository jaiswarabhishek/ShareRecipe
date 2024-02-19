import NavBar from "../components/NavBar"
import RecipeCard from "../components/RecipeCard"
import { useState } from "react"
import { useEffect } from "react"
import RecipeContext from "@/contexts/recipeContext"
import { motion } from "framer-motion"

const Home: React.FC = () => {
    const [recipeData, setRecipeData] = useState<Recipe[]>([])

    useEffect(() => {
        const data = localStorage.getItem("recipeData")
        if (data) {
            setRecipeData(JSON.parse(data))
        }
    }, [])

    // const images = [
    //     "https://images.unsplash.com/photo-1601315379734-425a469078de?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // ]

    return (
        <RecipeContext.Provider value={{ recipeData, setRecipeData }}>
            <NavBar />
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.09, ease: "easeInOut" }}
                style={{ opacity: "1", transform: "none" }}
                className="md:text-xl sm:text-[1.2em] w-[90%] md:w-[50%] mx-auto text-center font-bold text-gray-700 mt-10"
                data-testid="recipe-card"
            >
                Unleash your culinary creativity with ShareRecipe - where every recipe is a journey and every dish tells a story.
            </motion.h1>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.09, ease: "easeInOut" }}
                style={{ opacity: "1", transform: "none" }}
                className="sm:text-3xl text-xl mb-4 !font-[Lato] w-[90%] mx-auto font-semibold text-[#374151] mt-10"
                data-testid="recipe-card"
            >
                Week&apos;s Top Recipes :
            </motion.h1>

            <RecipeCard />
        </RecipeContext.Provider>
    )
}

export default Home
