//RecipeList component
import { Link } from "react-router-dom";
import useRecipeStore from "./RecipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    // console.log("Current recipes:", recipes);

    // const activeStyle = ({isActive}) => {
    //     return{
    //         backgroundColor : isActive ? "rgb(200 52 18)" : "",
    //         color : isActive ? "rgb(255 247 237)" : "",
    //     }
    // }
    console.log('filtered recipes:', filteredRecipes)

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