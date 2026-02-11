import { useEffect, useState } from "react";
import { deleteRecipe } from "../../services/api";
import "./_recipedetails.scss";

function RecipeDetails({ recipeId, setPage }) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/tasks/${recipeId}`)
            .then(res => res.json())
            .then(setRecipe);
    }, [recipeId]);

    const handleDelete = () => {
        deleteRecipe(recipeId).then(() => {
            setPage("recipes");
        });
    };

    if (!recipe) return <p>Loading...</p>;

    return (
        <div className="recipe-details">
            <p className="recipe-details__back" onClick={() => setPage("recipes")}>
                ← Back to recipes
            </p>

            <h1>{recipe.title}</h1>

            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Time:</strong> {recipe.time} min</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>

            <p className="recipe-details__delete" onClick={handleDelete}>
                Delete recipe
            </p>
        </div>
    );
}

export default RecipeDetails;
