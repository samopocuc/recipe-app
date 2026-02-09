import "./_home.scss";

function Home() {
    return (
        <div className="home">
            <div className="home__overlay">
                <h1 className="home__title">Recipe App</h1>

                <div className="home__actions">
                    <button>View Recipes</button>
                    <button>Add Recipe</button>
                </div>
            </div>
        </div>
    );
}

export default Home;

