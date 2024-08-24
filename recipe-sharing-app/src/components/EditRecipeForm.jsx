import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useRecipeStore from './RecipeStore';
import './EditRecipeForm.css';


const EditRecipeForm = () => {
    const {recipeId} = useParams();// Extract the recipeId from the URL parameters using useParams
    const navigate = useNavigate();

    // Fetch the recipe from the store using the extracted recipeId
     // The useRecipeStore hook is used to access the state and find the specific recipe by its ID
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === parseInt(recipeId))
    );
    console.log("Edit recipe data:", recipe)//debugging

     // Extract the updateRecipe function from the store to update an existing recipe
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    // Initialize local state for the form fields using useState
     // title and description are pre-filled with the current recipe's values
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description);
        }
    }, [recipe]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        updateRecipe({ id: recipe.id, title, description });// Call updateRecipe to update the recipe with the new title and description
        navigate(`/`); // Navigate back to the index path ("/") after updating the recipe
    };

    if (!recipe) {
        return <h2>Loading...</h2>;
    }

    // Render the form for editing the recipe
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Tittle'
            />
            <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Descrition'
            />
            <button type='submit'>Edit Recipe</button>
        </form>
);
};

export default EditRecipeForm;