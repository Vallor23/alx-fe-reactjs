// AddRecipeForm component
import { useState } from 'react';
import useRecipeStore from './RecipeStore';

const AddRecipeForm = () => {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const [tittle, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({id: Date.now(), tittle, description});
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={tittle}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Tittle'
            />
            <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Descrition'
            />
            <button type='submit'>Add Recipe</button>
        </form>
    );
};

export default AddRecipeForm;