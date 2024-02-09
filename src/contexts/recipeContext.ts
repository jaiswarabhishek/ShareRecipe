import { createContext } from "react"

interface RecipeContextProps {
    recipeData: Recipe[]
    setRecipeData: (recipes: Recipe[]) => void
}

const RecipeContext = createContext<RecipeContextProps>({
    recipeData: [],
    setRecipeData: () => {},
})

export default RecipeContext
