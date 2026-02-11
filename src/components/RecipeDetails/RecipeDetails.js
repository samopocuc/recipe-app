import { useEffect, useState } from "react";

function RecipeDetails({ recipeId, setPage }) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/tasks/${recipeId}`)
            .then(res => res.json())
            .then(setRecipe);
    }, [recipeId]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <div style={{ padding: "16px" }}>
            <h1>{recipe.title}</h1>
            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Time:</strong> {recipe.time} min</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>

            <button onClick={() => setPage("recipes")}>
                Back to recipes
            </button>
        </div>
    );
}

export default RecipeDetails;
