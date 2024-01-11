import NavBar from "../components/NavBar"
import RecipeCard from "../components/RecipeCard"
import { useState } from "react"
import { useEffect } from "react";
import Form from "@/components/Form";


export default function Home() {

//  const [recipeData, setRecipeData] = useState<Recipe[]>([]);
 
//   useEffect(() => {
//    const data = localStorage.getItem('recipeData')
//     if (data) {
//       setRecipeData(JSON.parse(data))
//     }
//   }, [])

  return (
    <div>
      {/* <NavBar
      setRecipeData={setRecipeData}
      recipeData={recipeData}
       />
      <h1
                className="text-xl w-[50%] mx-auto text-center font-bold text-gray-700 mt-10"
                data-testid="recipe-card"
      >
                Unleash your culinary creativity with ShareRecipe - where every recipe is a journey and every dish tells a story.
      </h1>
      <RecipeCard
      recipeData={recipeData}
       /> */}

      <Form />
    </div>
  )
}
