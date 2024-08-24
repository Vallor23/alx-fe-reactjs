import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import App from './App.jsx'
import RecipeDetails from './components/RecipeDetails.jsx';
import RecipeList from './components/RecipeList.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
         <Route index element={<RecipeList />} />
        <Route path='recipes/:recipeId' element={<RecipeDetails />}></Route>
      </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
