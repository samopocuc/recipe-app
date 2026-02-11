import { useEffect, useState } from "react";
import { deleteRecipe } from "../../services/api";
import Buttons from "../Buttons/Buttons";
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
            <h1>{recipe.title}</h1>

            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Time:</strong> {recipe.time} min</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>

            <Buttons
                firstLabel="Back to recipes"
                secondLabel="Delete recipe"
                onClickFirst={() => setPage("recipes")}
                onClickSecond={handleDelete}
            />
        </div>
    );
}

export default RecipeDetails;
