import { useState } from "react";
import { addRecipe } from "../../services/api";
import "./_addrecipe.scss";

function AddRecipe({ setPage }) {
    const [form, setForm] = useState({
        title: "",
        category: "Breakfast",
        time: "",
        ingredients: "",
        instructions: ""
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        addRecipe(form).then(() => setPage("recipes"));
    };

    return (
        <div className="add-recipe dark-bg">
            <h1>Add Recipe</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />

                <select name="category" value={form.category} onChange={handleChange}>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Dessert">Dessert</option>
                </select>

                <input
                    type="number"
                    name="time"
                    placeholder="Preparation Time (min)"
                    value={form.time}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="ingredients"
                    placeholder="Ingredients"
                    value={form.ingredients}
                    onChange={handleChange}
                    className="ingredients"
                    required
                />

                <textarea
                    name="instructions"
                    placeholder="Instructions"
                    value={form.instructions}
                    onChange={handleChange}
                    className="instructions"
                    required
                />

                <div className="form-buttons">
                    <button type="submit">Save Recipe</button>
                    <button type="button" onClick={() => setPage("home")}>
                        Back to Home
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddRecipe;


