function TaskCard({ task }) { // prejme en task kot prop
    return (
        <div className="task-card">
            <h3>{task.title}</h3>
            <p>Kategorija: {task.category}</p>
            <p>Čas priprave: {task.time} min</p>
            <p>Sestavine: {task.ingredients}</p>
            <p>Navodila: {task.instructions}</p>
        </div>
    );
}

export default TaskCard;
