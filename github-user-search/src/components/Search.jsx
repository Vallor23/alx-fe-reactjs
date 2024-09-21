import  { useState } from 'react'
import fetchUserData from '../services/githubService';

import { CiLocationOn } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const SearchComponent = () => {
const [username,setUsername] = useState('');
const [location,setLocation]=useState('');
const [minRepos,setMinRepos] = useState('');

const [userData, setUserData] = useState([]);
console.log(userData)
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const getUserData = async({ username, location, minRepos }) => {
      try {
          const data = await fetchUserData({ username, location, minRepos });
          setUserData(data);
      } catch (error) {
          setError(error)
      } finally {
        setIsLoading(false)
      }
      
  }

  if(isLoading) return <p>Loading...</p>;
  if(error) return <p>Looks like we cant find the user</p>;

const handleSubmit = (e) => {
    e.preventDefault()
    getUserData({ username, location, minRepos })
}
    

  return (
    <div>
        <div className='mt-6 bg-DarkBlue'>
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
            <div className="mb-4">
                <label className="block text-gray-700">Username:</label>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Location:</label>
                <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
                </div>
            <div className="mb-4">
                <label className="block text-gray-700">Minimum Repositories:</label>
                <input
                type="number"
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                Search
            </button>
    </form>
    </div>

    <div>
        {userData.length > 0 && userData.map((user) =>
      (<div key={user.id} className='flex-col text-white gap-6 p-4 bg-LightDarkBlue rounded-lg shadow-lg'>
        <div className='flex gap-4 border p-6'>
            <img src={user.avatar_url} alt="avatar"  className='rounded-full w-20 h-20'/>
            <h1 className='text-xl font-semibold'>{user.login}</h1>
            <p>{user.html_url}</p>
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
                    <span><a href='${user.url}' target="_blank">@github</a></span>
                </p>
            </div>
        </div>
    </div>)
    )}      
    </div>
    </div>
    
  )
}

export default SearchComponent;