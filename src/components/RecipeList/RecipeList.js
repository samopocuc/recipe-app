import { useEffect, useState } from "react";
import { getTasks } from "../../services/api"; // <--- tukaj

function RecipeList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(data => setTasks(data));
    }, []);

    return (
        <div>
            <h2>Recepti / Tasks</h2>
            {tasks.map(task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.category} • {task.time} min</p>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;
