# FridgeTable

A recipe discovery app built with React. Add ingredients to your pantry, search for recipes based on what you have, view full recipe details, save your favorites, and build a shopping list for what you need.

## Setup

```
cd react-app
npm install
npm run dev
```

You'll need a Spoonacular API key. Create a `.env` file in `react-app/`:

```
VITE_SPOONACULAR_API_KEY=your_key_here
```

## Tech Stack

- React + Vite
- React Router for navigation
- Redux Toolkit for state management (pantry, shopping list, saved recipes)
- TanStack React Query for API data fetching
- Tailwind CSS for styling
- Spoonacular API for recipe data

## Features

### Home
- Landing page with quick links to Pantry and Recipe Search
- Feature overview cards explaining the app's core functionality

### Pantry
- Add ingredients with expiration dates
- Remove ingredients from inventory
- Select ingredients to use in recipe search
- Items sorted by expiration date, expired items flagged
- Shows count of total ingredients and selected items

### Recipe Search
- Search for recipes using selected pantry ingredients
- Filter by max results, search priority, and whether to ignore common pantry items
- Results show how many of your ingredients are used and how many are missing
- Click through to view full recipe details

### Recipe Details
- View full recipe info — title, image, cook time, servings
- See the full ingredient list and step-by-step instructions
- Add all ingredients to your shopping list with one click
- Save or unsave recipes for later

### Shopping List
- Built from recipe ingredients
- Remove individual items or clear the whole list
- Duplicates are automatically handled

### Saved Recipes
- Save recipes from the details page
- View all saved recipes in a card grid
- Unsave recipes to remove them
