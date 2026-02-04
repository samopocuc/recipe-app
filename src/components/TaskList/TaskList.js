import { useEffect, useState } from "react";
import { getTasks } from "../../services/api";
import TaskCard from "../TaskCard/TaskCard";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(data => setTasks(data));
    }, []);

    return (
        <div>
            <h2>Seznam receptov</h2>
            {tasks.length === 0 ? (
                <p>Noben recept še ni dodan.</p>
            ) : (
                tasks.map(task => <TaskCard key={task.id} task={task} />)
            )}
        </div>
    );
}

export default TaskList;
