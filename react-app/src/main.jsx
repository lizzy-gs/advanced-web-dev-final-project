import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

import Pantry from './routes/Pantry'
import RecipeSearch from './routes/RecipeSearch'
import Shopping from './routes/Shopping.jsx'
import Home from './routes/Home.jsx'
import Recipes from './routes/Recipes.jsx'
import Root from './routes/Root.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import RecipeDetails from './routes/RecipeDetails.jsx';

import { Provider } from 'react-redux'
import store from './redux/store'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    ErrorBoundary: ErrorPage,
    children: [
      { index: true, Component: Home },
      {
        path: "search", Component: RecipeSearch,
      },
      {
        path: "search/:recipeId", Component: RecipeDetails
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
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)