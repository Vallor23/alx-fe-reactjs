import {create} from 'zustand';

 const useRecipeStore = create(set => ({
    recipes: [
        {
            id: 1,
            title: 'Spaghetti Carbonara',
            cuisine: 'Italian',
            difficulty: 'Intermediate',
            cookingTime: 30, // in minutes
            description: 'A classic Roman pasta dish made with eggs, cheese, pancetta, and pepper. It’s creamy, comforting, and quick to make.',
          },
          {
            id: 2,
            title: 'Chicken Tikka Masala',
            cuisine: 'Indian',
            difficulty: 'Advanced',
            cookingTime: 45, // in minutes
            description: 'Tender chicken pieces marinated in spices and yogurt, then cooked in a creamy tomato-based sauce. A popular dish in Indian cuisine.',
          },
          {
            id: 3,
            title: 'Sushi Rolls',
            cuisine: 'Japanese',
            difficulty: 'Advanced',
            cookingTime: 60, // in minutes
            description: 'Traditional Japanese dish featuring vinegared rice, raw or cooked fish, and vegetables, all rolled in seaweed (nori).',
          },
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
    
    
    searchTerm: '',//Initialize thw search term as an empty string
    
    setSearchTerm: (term) => set({searchTerm: term}),// Action to set/update the search term
    filteredRecipes: [],//initialize the filtered recipes as an empty array
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    })),//Action to filter the recipes based on the search term


    favorites: [],
    addFavorites:(recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
    removeFavourite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),
    
    recommendations: [],
    generateRecommendations: () => set(state => {
        //Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return {recommendations: recommended};
    }),
}));

export default useRecipeStore;
