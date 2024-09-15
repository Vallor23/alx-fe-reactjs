import { useState } from "react";

const AddRecipeForm = (onAddRecipe) => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [image, setImage] = useState('');

    const [errors,setErrors]= useState();

    // Validation logic
    const validate = () =>{
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

        if (!steps.trim()) {
            validationErrors.steps = "steps are required.";
        }

        if (!image.trim()) {
            validationErrors.image = "Image URL is required.";
        }

        // If there are errors, set the error messages in the state and return
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate the form using the validate function
        const validationErrors = validate();

        // If there are errors, set them in the state and return
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
            steps:steps.split(',').map(ing =>ing.trim()),
            image,
        };
        
        // Call the parent function to add the new recipe
        onAddRecipe(newRecipe);

        // Reset form
        setTitle('');
        setSummary('');
        setIngredients('');
        setSteps('');
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
            <label className="">steps (separate by periods)</label>
            <textarea
                name="steps"
                value={steps}
                onChange={(e)=>setSteps(e.target.value)}
            />
            {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
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
