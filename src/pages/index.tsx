import NavBar from "../components/NavBar"
import RecipeCard from "../components/RecipeCard"
import { useState } from "react"
import { useEffect } from "react";
import RecipeContext from "@/contexts/recipeContext";
import {motion} from 'framer-motion';

export default function Home() {

  const [recipeData, setRecipeData] = useState<Recipe[]>([]);
 
  useEffect(() => {
   const data = localStorage.getItem('recipeData')
    if (data) {
      setRecipeData(JSON.parse(data)) 
    }
  }, [])

  return (
    <RecipeContext.Provider value={{recipeData,setRecipeData}}>
      <NavBar />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.09, ease: "easeInOut" }}
        style={{opacity: "1", transform: "none"}}
       className="md:text-xl sm:text-[1.2em] w-[90%] md:w-[50%] mx-auto text-center font-bold text-gray-700 mt-10" data-testid="recipe-card">Unleash your culinary creativity with ShareRecipe - where every recipe is a journey and every dish tells a story.</motion.h1>
      <RecipeCard/>
    </RecipeContext.Provider>
  )
}
