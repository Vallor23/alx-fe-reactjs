import { useRecipeStore } from './RecipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    return (
        <input 
        type="text"
        placeholder='Search recipes...'
        onChange={(event) => setSearchTerm(event.target.value)}
        />
    );
}
export default SearchBar;