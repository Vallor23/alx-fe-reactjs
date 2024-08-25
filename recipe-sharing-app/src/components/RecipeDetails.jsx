// RecipeDetails component
import { useParams } from 'react-router-dom';
import useRecipeStore  from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const {recipeId} = useParams();

    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === parseInt(recipeId))
    );

    if(!recipe) {
        return <h2>Recipe not found</h2>
    }


    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.cuisine}</p>
            <p>{recipe.difficulty}</p>
            <p>{recipe.cookingTime}</p>
            <p>{recipe.description}</p>
            {/* Render EditRecipeForm and DeleteRecipeButton here */}
            <EditRecipeForm />
            <DeleteRecipeButton />
        </div>
    )
}

export default RecipeDetails;
