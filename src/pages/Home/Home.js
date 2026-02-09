import Buttons from "../../components/Buttons/Buttons";
import "./_home.scss";

function Home({ setPage }) {
    return (
        <div className="home">
            <div className="home__overlay">
                <h1 className="home__title">Recipe App</h1>
                <Buttons
                    firstLabel="View Recipes"
                    secondLabel="Add Recipe"
                    onClickFirst={() => setPage("recipes")}
                    onClickSecond={() => setPage("add")}
                />
            </div>
        </div>
    );
}

export default Home;
