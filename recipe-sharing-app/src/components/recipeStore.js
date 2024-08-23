import {create} from 'zustand';

 const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe:(newRecipe) =>(state => ({ recipes: [...state.recipes, newRecipe]
    })),
    setRecipes: (recipes) => set({ recipes}),
    deleteRecipe: () =>(state => ({recipe: state.recipe})),
    
}))

export default useRecipeStore;
