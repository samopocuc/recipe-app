import RecipeList from "../../components/RecipeList/RecipeList";
import Buttons from "../../components/Buttons/Buttons";
import "./_recipespage.scss";

function RecipesPage({ setPage, setSelectedRecipeId }) {
    return (
        <div className="recipes-page">
            <h1 className="recipes-page__title">All Recipes</h1>

            <Buttons
                firstLabel="Back to Home"
                secondLabel=""
                onClickFirst={() => setPage("home")}
                onClickSecond={null} // drugi gumb pustimo prazen
            />

            <RecipeList
                setPage={setPage}
                setSelectedRecipeId={setSelectedRecipeId}
            />
        </div>
    );
}

export default RecipesPage;
