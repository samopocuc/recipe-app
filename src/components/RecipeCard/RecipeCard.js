import "./_recipecard.scss";

function RecipeCard({ recipe }) {
    return (
        <div className={`recipe-card ${recipe.category}`}>
            <h3>{recipe.title}</h3>
            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Preparation time:</strong> {recipe.time} min</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
        </div>
    );
}

export default RecipeCard;

