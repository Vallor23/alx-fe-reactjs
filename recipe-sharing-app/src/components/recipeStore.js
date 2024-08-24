import {create} from 'zustand';

 const useRecipeStore = create(set => ({
    recipes: [
        { id: 1, title: 'Pancakes', description: 'Delicious pancakes.' },
        { id: 2, title: 'Omelette', description: 'Fluffy omelette.' }
    ],

    addRecipe:(newRecipe) =>set((state) => ({ 
        recipes: [...state.recipes, newRecipe]
    })),
    
    setRecipes: (recipes) => set({ recipes}),

    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
    })),

    deleteRecipe: (recipeId) =>set((state) => 
        ({recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)})),
    
}));

export default useRecipeStore;
