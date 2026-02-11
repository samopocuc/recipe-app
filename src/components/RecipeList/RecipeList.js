import { useEffect, useState } from "react";
import { getRecipes } from "../../services/api";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./_recipelist.scss";

function RecipeList({ setPage, setSelectedRecipeId }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes().then(setRecipes);
    }, []);

    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => {
                        setSelectedRecipeId(recipe.id);
                        setPage("details");
                    }}
                />
            ))}
        </div>
    );
}

export default RecipeList;

