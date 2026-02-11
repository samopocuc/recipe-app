import { useState } from "react";
import Home from "./pages/Home/Home";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";

function App() {
    const [page, setPage] = useState("home"); // home | recipes | add | details
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);

    return (
        <>
            {page === "home" && <Home setPage={setPage} />}

            {page === "recipes" && (
                <RecipesPage
                    setPage={setPage}
                    setSelectedRecipeId={setSelectedRecipeId}
                />
            )}

            {page === "details" && (
                <RecipeDetails
                    recipeId={selectedRecipeId}
                    setPage={setPage}
                />
            )}

            {page === "add" && <AddRecipe setPage={setPage} />}
        </>
    );
}

export default App;
