const API_URL = "http://localhost:3000/tasks";

export const getRecipes = () =>
    fetch(API_URL)
        .then(res => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        });

export const addRecipe = (recipe) =>
    fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipe)
    })
        .then(res => {
            if (!res.ok) throw new Error("Failed to add recipe");
            return res.json();
        });

export const deleteRecipe = (id) =>
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });