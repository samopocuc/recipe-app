import { useEffect, useState } from "react";
import { getRecipes } from "../../services/api";

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes()
            .then(data => setRecipes(data))
            .catch(err => console.error("Napaka pri pridobivanju receptov:", err));
    }, []);

    return (
        <div>
            <h2>Seznam receptov</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <strong>{recipe.title}</strong> ({recipe.category}) - {recipe.time} min
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;

