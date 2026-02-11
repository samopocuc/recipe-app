import { useEffect, useState } from "react";
import { getRecipes } from "../../services/api";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./_recipelist.scss";

function RecipeList({ setPage, setSelectedRecipeId }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes()
            .then(data => setRecipes(data))
            .catch(err => console.error("Error fetching recipes:", err));
    }, []);

    const handleCardClick = (id) => {
        setSelectedRecipeId(id);
        setPage("details");
    };

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div key={recipe.id} onClick={() => handleCardClick(recipe.id)}>
                    <RecipeCard recipe={recipe} />
                </div>
            ))}
        </div>
    );
}

export default RecipeList;
