import { useParams } from "react-router-dom";
import useRecipeStore from "./RecipeStore";
import { useNavigate } from "react-router-dom";
import './DeleteRecipeButton.css'
const DeleteRecipeButton = () => {
    //Extract the recipeId from the URL parameters
    const {recipeId} = useParams();

    // Use navigate from react-router to programmatically navigate to different routes
    const navigate = useNavigate();

    //Fetch the deleteRecipe from the store
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    //Handle the click event for the delete button
    const handleDelete = () => {
        //Call deleteRecipe to remove the recipe with the given ID
        deleteRecipe(parseInt(recipeId));

        //Navigate back to the index path ("/") after deleting the recipe
        navigate('/');
    };

    //Render a button to delete the recipe
    return (
        <button className='delete-button' onClick={handleDelete}> 
            Delete Recipe
        </button>
    )
}

export default DeleteRecipeButton;