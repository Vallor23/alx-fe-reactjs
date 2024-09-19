import { useState } from "react";

const AddRecipeForm = (onAddRecipe) => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [image, setImage] = useState('');

    const [errors,setErrors]= useState({});

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

         return validationErrors;
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

    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center ">Add a New Recipe</h2>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Summary</label>
            <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={summary}
                onChange={(e)=>setSummary(e.target.value)}
            />
            {errors.summary && <p className="text-red-500 text-sm mt-1">{errors.summary}</p>}
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Ingredients (comma-separated)</label>
        <textarea
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={ingredients}
            id=""
            onChange={(e)=>setIngredients(e.target.value)}
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">steps (separate by periods)</label>
            <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={steps}
                onChange={(e)=>setSteps(e.target.value)}
            />
            {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>
         <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Image URL</label>
            <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={image}
                onChange={(e)=>setImage(e.target.value)}
            />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
        </div>
        <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Submit</button>
    </form>
  )
}

<<<<<<< HEAD
export default AddRecipeForm;
=======
export default AddRecipeForm;
>>>>>>> 338daace24636dcdd6634262c35f0854bcf0eeb3
