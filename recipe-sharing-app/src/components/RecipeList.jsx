//RecipeList component
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
    // const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);
    // console.log("Current recipes:", recipes);//debug
    console.log('filtered recipes:', filteredRecipes)//debug
    console.log(searchTerm);//debug

    return (
        <div className="recipe-list">
            {filteredRecipes.map(recipe => (
                <div key={recipe.id} className="recipe-card">
                    <h3 className="recipe-title"><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></h3>
                    <p className="recipe-description">{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;