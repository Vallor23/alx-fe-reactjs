//RecipeList component
import useRecipeStore from "./RecipeStore";

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
        <div>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.tittle}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;