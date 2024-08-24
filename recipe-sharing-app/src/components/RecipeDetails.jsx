// RecipeDetails component
import { useParams } from 'react-router-dom';
import useRecipeStore  from './RecipeStore';
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
            <p>{`My recipe id: ${recipe.id}`}</p>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            {/* Render EditRecipeForm and DeleteRecipeButton here */}
            <EditRecipeForm />
            <DeleteRecipeButton />
        </div>
    )
}

export default RecipeDetails;
