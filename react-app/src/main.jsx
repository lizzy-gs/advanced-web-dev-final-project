import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pantry from './routes/Pantry'
import RecipeSearch from './routes/RecipeSearch'
import Recipe from './routes/Recipe.jsx'
import Shopping from './routes/Shopping.jsx'
import Home from './routes/Home.jsx'
import Recipes from './routes/Recipes.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: Home },
      {
        path: "search", Component: RecipeSearch,
        children: [
          { path: ":recipe", Component: Recipe }
        ]
      },
      {
        path: "recipes", Component: Recipes
      },
      {
        path: "shopping", Component: Shopping
      },
      {
        path: "pantry", Component: Pantry
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
