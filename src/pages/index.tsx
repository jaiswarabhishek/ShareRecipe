import NavBar from "../components/NavBar"
import RecipeCard from "../components/RecipeCard"
import { useState } from "react"
import { useEffect } from "react";
import RecipeContext from "@/contexts/recipeContext";

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
      <h1 className="text-xl w-[50%] mx-auto text-center font-bold text-gray-700 mt-10" data-testid="recipe-card">
       Unleash your culinary creativity with ShareRecipe - where every recipe is a journey and every dish tells a story.
      </h1>
      <RecipeCard/>
    </RecipeContext.Provider>
  )
}
