import {useState, useEffect} from 'react'

const Homepage = () => {
    const [recipes,setRecipes] = useState([]);

    useEffect( () => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('/public/data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error('Fetch Error:', error)
            }  
        }
        fetchRecipes();
    }, []);
    //Debug
    useEffect(() => {
        console.log(recipes);
      }, [recipes]);

  return (
    <div className='container mx-auto'>
        <div className=' grid gap-4 sm:gap-6 lg:gap-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between'>
        {recipes.length > 0 ? 
        (recipes.map((recipe) => (
            // recipe-card
            <div key={recipe.id} className='bg-white text-center p-4 rounded shadow border-solid border border-black'>
                <h2 className='text-xl tracking-wide font-bold mt-2'>{recipe.title}</h2>
                <p className='mt-2'>{recipe.summary}</p>
                <div className='flex justify-center'>
                    <img src={recipe.image} alt={recipe.tittle} className='mt-2'/>
                </div>
            </div>
        ))
        ) : (
            <p>No recipe found</p>
        )}
    </div>
    </div>
  )
}

export default Homepage;