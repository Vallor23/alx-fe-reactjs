import { useState } from "react";

const AddRecipeForm = (onAddRecipe) => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [image, setImage] = useState('');

    const [errors,setErrors]= useState();

    const handleSubmit = (e) => {
        e.preventDefault();

         // Validation logic
         let validationErrors = {};

         if (!title.trim()) {
             validationErrors.title = "Title is required.";
         }
 
         if (!summary.trim()) {
             validationErrors.summary = "Summary is required.";
         }
 
         if (!ingredients.trim()) {
             validationErrors.ingredients = "Ingredients are required.";
         } else {
             const ingredientsArray = ingredients.split(',').map(ing => ing.trim());
             if (ingredientsArray.length < 2) {
                 validationErrors.ingredients = "Please enter at least two ingredients.";
             }
         }
 
         if (!instructions.trim()) {
             validationErrors.instructions = "Instructions are required.";
         }
 
         if (!image.trim()) {
             validationErrors.image = "Image URL is required.";
         }
 
         // If there are errors, set the error messages in the state and return
         if (Object.keys(validationErrors).length > 0) {
             setErrors(validationErrors);
             return;
         }

        // create a new recipe object
        const newRecipe = {
            id: Date.now(),
            title,
            summary,
            ingredients:ingredients.split(',').map(ing =>ing.trim()),//convert to array
            instructions:instructions.split(',').map(ing =>ing.trim()),
            image,
        };
        
        // Call the parent function to add the new recipe
        onAddRecipe(newRecipe);

        // Reset form
        setTitle('');
        setSummary('');
        setIngredients('');
        setInstructions('');
        setImage('');
    }
    
  return (

    <form onSubmit={handleSubmit}>
        <h2 className="">Add a New Recipe</h2>
        <div>
            <label className="">Title</label>
            <input
                type="text"
                name='title'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>
        <div>
            <label className="">Summary</label>
            <input
                type="text"
                name='summary'
                value={summary}
                onChange={(e)=>setSummary(e.target.value)}
            />
            {errors.summary && <p className="text-red-500 text-sm">{errors.summary}</p>}
        </div>
        <div className="">
        <label className="">Ingredients (comma-separated)</label>
        <textarea
            name="ingredients"
            value={ingredients}
            id=""
            onChange={(e)=>setIngredients(e.target.value)}
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>
        <div className="">
            <label className="">Instructions (separate by periods)</label>
            <textarea
                name="instructions"
                value={instructions}
                onChange={(e)=>setInstructions(e.target.value)}
            />
            {errors.instructions && <p className="text-red-500 text-sm">{errors.instructions}</p>}
        </div>
         <div className="">
            <label className="">Image URL</label>
            <input
                type="text"
                name='imageurl'
                value={image}
                onChange={(e)=>setImage(e.target.value)}
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default AddRecipeForm;
