import "./_recipecard.scss";

function RecipeCard({ recipe, onClick }) {
    return (
        <div
            className={`recipe-card ${recipe.category}`}
            onClick={onClick}
        >
            <h3>{recipe.title}</h3>
            <p><strong>Category:</strong> {recipe.category}</p>
            <p><strong>Preparation time:</strong> {recipe.time} min</p>
        </div>
    );
}

export default RecipeCard;
