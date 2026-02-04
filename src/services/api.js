const API_URL = "http://localhost:3000/tasks";

export const getTasks = () =>
    fetch(API_URL)
        .then(res => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
        });

