import RecipeList from "../../components/RecipeList/RecipeList";
import "./_recipespage.scss";

function RecipesPage({ setPage }) {
    return (
        <div className="recipes-page">
            <h1 className="recipes-page__title">All Recipes</h1>
            <button onClick={() => setPage("home")}>Back to Home</button>
            <RecipeList />
        </div>
    );
}

export default RecipesPage;
