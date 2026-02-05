import "./_recipecard.scss";

function RecipeCard({ recipe }) {
    return (
        <div className={`recipe-card ${recipe.category}`}>
            <h3>{recipe.title}</h3>
            <p><strong>Kategorija:</strong> {recipe.category}</p>
            <p><strong>Čas priprave:</strong> {recipe.time} min</p>
            <p><strong>Sestavine:</strong> {recipe.ingredients}</p>
            <p><strong>Navodila:</strong> {recipe.instructions}</p>
        </div>
    );
}

export default RecipeCard;

