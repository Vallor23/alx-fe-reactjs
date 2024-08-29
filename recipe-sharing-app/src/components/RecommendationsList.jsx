import  useRecipeStore from './recipeStore';

const RecommendationsList = () => {
    
  const recommendations = useRecipeStore(state => state.recommendations.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));
  console.log('My recommendations are:',recommendations)//debug
  
  return (
    <div>
      <h2>My Recommendations</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList