import UserContext from './UserContext';
import UserDetails from './UserDetails';
import UserProfile from './UserProfile';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
   <UserContext.Provider value={{userData}} >
      <UserDetails />;
      <UserProfile />
   </UserContext.Provider> 
  ) 
}

export default App;
