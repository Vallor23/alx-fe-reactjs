// import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { Outlet } from "react-router-dom";

// import EditRecipeForm from "./components/EditRecipeForm";
const App = () => {
    return (
        <div className="app-container">
            <h1 className="app-title">My Recipe App</h1>
            
            <AddRecipeForm />
            {/* <EditRecipeForm /> */}
            <Outlet />
        </div>
    );
};

export default App;