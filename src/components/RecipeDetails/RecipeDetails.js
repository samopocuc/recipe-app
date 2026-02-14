import { useEffect, useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
import "./_recipedetails.scss";
import { deleteRecipe } from "../../services/api";

function RecipeDetails({ recipeId, setPage }) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/tasks/${recipeId}`)
            .then(res => res.json())
            .then(setRecipe);
    }, [recipeId]);

    if (!recipe) return <p>Loading...</p>;

    const handleDelete = () => {
        deleteRecipe(recipe.id).then(() => setPage("recipes"));
    };

    return (
        <div className={`recipe-details ${recipe.category}`}>
            <h1>{recipe.title}</h1>
            <div className="recipe-content">
                <p><strong>Category:</strong> {recipe.category}</p>
                <p><strong>Time:</strong> {recipe.time} min</p>
                <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                <p><strong>Instructions:</strong> {recipe.instructions}</p>
            </div>

            <Buttons
                firstLabel="Back to Recipes"
                secondLabel="Delete Recipe"
                onClickFirst={() => setPage("recipes")}
                onClickSecond={handleDelete}
            />
        </div>
    );
}

export default RecipeDetails;
