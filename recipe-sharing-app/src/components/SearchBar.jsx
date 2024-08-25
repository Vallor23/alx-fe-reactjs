import useRecipeStore from './recipeStore';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';

console.log("SearchBar rendered");
const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    
    console.log("SearchBar rendered");
    return (
        <div className='search-bar'>
            <input 
            type="text"
            placeholder='Search recipes...'
            onChange={(event) => setSearchTerm(event.target.value)}//Update the search term when the user types
            className='search-input'
            />
            <BsSearch onClick={filterRecipes} className='search-icon'/>
        </div>
        
    );
}
export default SearchBar;