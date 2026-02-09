import RecipeList from "../../components/RecipeList/RecipeList";
import "./_recipespage.scss";

function RecipesPage() {
    return (
        <div className="recipes-page">
            <h1 className="recipes-page__title">All Recipes</h1>
            <RecipeList />
        </div>
    );
}

export default RecipesPage;
