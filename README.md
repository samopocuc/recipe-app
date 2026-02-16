# Recipe App

A simple Recipe application built with React that allows users to manage recipes.

## Features

- View all recipes in a responsive grid
- Add new recipes via a form
- View detailed recipe information with ingredients and instructions
- Category-specific styling (Breakfast, Lunch, Dinner, Dessert)
- Fetch tasks from local API using json-server
- Clean, dark-themed UI

## Tech Stack

- React
- JavaScript (ES6+)
- SCSS Modules
- Fetch API

## Getting Started

1. **Install dependencies**

\`\`\`bash
npm install
\`\`\`

2. **Start the development server**

\`\`\`bash
npm start
\`\`\`

3. **API requirement**
The app expects a local API running at:

Run the backend as:
\`\`\`bash
json-server --watch tasks.json
\`\`\`

http://localhost:3000/tasks

Example task object:
\`\`\`json
{
"id": "1",
"title": "Pancakes",
"category": "Breakfast",
"time": 20,
"ingredients": "flour, milk, eggs",
"instructions": "Mix ingredients and fry pancakes."
},

## Project Structure

\`\`\`
src/
├── components/
│   ├── Buttons/
│   ├── RecipeCard/
│   ├── RecipeDetails/
│   ├── AddRecipeForm/
│   ├── Header/
│   ├── RecipeList/
│   └── TaskList/
├── pages/
│   ├── Home/
│   ├── AddRecipe/
│   ├── RecipesPage/
├── services/
│   └── api.js
├── styles/
│   ├── general/
│   │   └── variables.scss
│   ├── main/
│   │   ├── _main.scss
│   │   └── main.scss
│   └── mixins/
│       └── _mixins.scss
├── App.js
└── index.js

\`\`\`

## Notes

- This project is intended for learning and demonstration purposes.
- No authentication or persistence is included by default.
- Styling uses SCSS variables and mixins for consistency.

## License

© 2026 Coders Lab
EOL

