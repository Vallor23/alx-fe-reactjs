import {create} from 'zustand';

 const useRecipeStore = create(set => ({
    recipes: [
        { id: 1, title: 'Pancakes', description: 'Delicious pancakes.' },
        { id: 2, title: 'Omelette', description: 'Fluffy omelette.' }
    ],

    addRecipe:(newRecipe) =>set((state) => ({ 
        recipes: [...state.recipes, newRecipe]
    })),
    
    setRecipes: (recipes) => set({ recipes}),// Action to set all recipes (initial load or update)

    updateRecipe: (updatedRecipe) => set((state) => ({
        recipes: state.recipes.map(recipe =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
    })),

    deleteRecipe: (recipeId) =>set((state) => 
        ({recipes: state.recipes.filter((recipe) => recipe.id !== recipeId)})),
    
    
    searchTerm: '',// State to store the current search term
    // Action to set the search term
    setSearchTerm: (term) => set({searchTerm: term}),//Update the search term in the state
    filteredRecipes: [],
    //Filter the recipes based on the search term
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase.includes(state.searchTerm.toLowerCase())
        )
    })),
}));

export default useRecipeStore;
