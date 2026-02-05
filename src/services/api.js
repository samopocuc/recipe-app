const API_URL = "http://localhost:3000/tasks";

export const getRecipes = () => {
    return fetch(API_URL).then(res => {
        if (!res.ok) {
            throw new Error("Failed to fetch recipes");
        }
        return res.json();
    });
};

