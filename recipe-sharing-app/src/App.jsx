import AddRecipeForm from "./components/AddRecipeForm";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RecipeDetails from './components/RecipeDetails.jsx';
import RecipeList from './components/RecipeList.jsx';
import SearchBar from "./components/SearchBar.jsx";
import FavoriteList from "./components/FavoritesList.jsx";
import RecommendationsList from "./components/RecommendationsList.jsx"

// import EditRecipeForm from "./components/EditRecipeForm";
const App = () => {
    return (
        <Router>
            <div className="app-container">
            <h1 className="app-title">My Recipe App</h1>
            <SearchBar />
            <AddRecipeForm />
            <Outlet />
            <FavoriteList />
            <RecommendationsList />
            <Routes>
                <Route index element={<RecipeList />} />
                <Route path='recipes/:recipeId' element={<RecipeDetails />}></Route>
            </Routes>
        </div>
        </Router>
    );
};

export default App;