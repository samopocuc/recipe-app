import RecipeList from "../../components/RecipeList/RecipeList";
import Buttons from "../../components/Buttons/Buttons";
import "./_recipespage.scss";

function RecipesPage({ setPage, onSelectRecipe }) {
    return (
        <div className="recipes-page">
            <h1 className="recipes-page__title">All Recipes</h1>

            <Buttons
                firstLabel="Back to Home"
                secondLabel=""
                onClickFirst={() => setPage("home")}
                onClickSecond={() => {}}
            />

            <RecipeList onSelectRecipe={onSelectRecipe} />
        </div>
    );
}

export default RecipesPage;
