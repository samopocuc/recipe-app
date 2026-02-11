import { useEffect, useState } from "react";
import { getRecipes } from "../../services/api";
import RecipeCard from "../RecipeCard/RecipeCard";
import "../RecipeCard/_recipecard.scss";
import "./_recipelist.scss";

function RecipeList({ onSelectRecipe }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes()
            .then(data => setRecipes(data))
            .catch(err => console.error("Error fetching recipes:", err));
    }, []);

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => onSelectRecipe(recipe.id)}
                />
            ))}
        </div>
    );
}

export default RecipeList;

