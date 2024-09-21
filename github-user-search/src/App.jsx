import { CiLocationOn } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import SearchComponent from './components/Search'
import fetchUserData from "./services/githubService";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getUserData = async(username,location,minRepos) => {
      try {
          const data = await fetchUserData(username,location,minRepos);
          setUserData(data);
      } catch (error) {
          setError(error)
      } finally {
        setIsLoading(false)
      }
      
  }

  if(isLoading) return <p>Loading...</p>;
  if(error) return <p>Looks like we cant find the user</p>;


  const handleSearch = () => {
    getUserData();
  }
      

  return (
    <div className=' container mt-6 bg-DarkBlue font-roboto'>
      <h1 className='text-3xl text-center font-bold text-white mt-12'>GitHub User Search</h1>
      <SearchComponent onSearch={handleSearch}/>

      {userData.map((user) =>
      (<div key={user.id} className='flex-col text-white gap-6 p-4 bg-LightDarkBlue rounded-lg shadow-lg'>
        <div className='flex gap-4 border p-6'>
            <img src={user.avatar_url} alt="avatar"  className='rounded-full w-20 h-20'/>
            <h1 className='text-xl font-semibold'>{user.name}</h1>
            {/* <p>Login: <span>{userData.login}</span></p> */}
        </div>

        <div className=''>
            <div className='flex bg-DarkBlue justify-around mt-4 rounded-md p-2'>
                <p>Repo</p>
                <p>Followers</p>
                <p>Following</p>
            </div>
            <div className='grid grid-cols-1 gap-4 mt-6'>
                <p className='flex items-center gap-2'>
                    <CiLocationOn className=''/>
                    <span>{user.location}</span>
                </p>
                <p className='flex items-center gap-2'>
                    <FaLink />
                    <span>{user.location}</span>
                </p>
                <p className='flex items-center gap-2'>
                    <FaTwitter className='text-blue-500'/>
                    <span>{user.location}</span>
                </p>
                <p className='flex items-center gap-2'>
                    <FaGithub className='text-blue-500'/>
                    <span><a href="${user.url}" target="_blank">@github</a></span>
                </p>
            </div>
        </div>
    </div>)
    )}     
    </div>
      
  )
}

export default App;