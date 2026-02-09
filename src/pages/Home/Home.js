import "./_home.scss";

function Home({ setPage }) {
    return (
        <div className="home">
            <div className="home__overlay">
                <h1 className="home__title">Recipe App</h1>
                <div className="home__actions">
                    <button onClick={() => setPage("recipes")}>View Recipes</button>
                    <button onClick={() => setPage("add")}>Add Recipe</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
