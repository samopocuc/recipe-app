import { useState } from "react";
import Home from "./pages/Home/Home";
import RecipesPage from "./pages/RecipesPage/RecipesPage";
import AddRecipe from "./pages/AddRecipe/AddRecipe";

function App() {
    const [page, setPage] = useState("home"); // "home", "recipes", "add"

    return (
        <>
            {page === "home" && <Home setPage={setPage} />}
            {page === "recipes" && <RecipesPage setPage={setPage} />}
            {page === "add" && <AddRecipe setPage={setPage} />}
        </>
    );
}

export default App;
