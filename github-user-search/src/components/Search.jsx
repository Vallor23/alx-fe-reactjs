import  { useState } from 'react'
import fetchUserData from '../services/githubService';

import { CiLocationOn } from "react-icons/ci";
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const SearchComponent = () => {
    const [username,setUsername] = useState('');
    const [location,setLocation]=useState('');
    const [repos,setRepos] = useState('');

    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    const getUserData = async({ username, location, repos }) => {
        try {
            const data = await fetchUserData({ username, location, repos });
            setUserData(data);
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        getUserData({ username, location, repos })
    }

    if(isLoading) return <p>Loading...</p>;
    if(error) return <p>Looks like we cant find the user</p>;

    return (
        <div className=''>
            <div className='mt-6  bg-DarkBlue'>
            <form onSubmit={handleSubmit} className="p-6 bg-LightDarkBlue rounded-lg shadow-lg max-w-lg mx-auto border border-gray-700">
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-semibold mb-2">Username:</label>
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-semibold mb-2">Location:</label>
                    <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                    </div>
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-semibold mb-2">Minimum Repositories:</label>
                    <input
                    type="number"
                    value={repos}
                    onChange={(e) => setRepos(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    />
                </div>
                <button 
                    type="submit" 
                    className='bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600  shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out'>
                    Search
                </button>
        </form>
        </div>
        <div className="mt-8 space-y-4">
            {userData.length > 0 && userData.map((user) =>(
                <div key={user.id} className='p-4 bg-gray-800 text-white rounded-lg shadow-lg'>
                <div className='flex flex-col sm:flex-row items-center gap-4 border-b pb-4 mb-4'>
                    <img src={user.avatar_url} alt="avatar"  className='rounded-full w-20 h-20'/>
                    <h1 className='text-xl font-semibold'>{user.login}</h1>
                    <a href={user.html_url} target="_blank" className="text-blue-400 hover:underline" >
                        {user.html_url}
                    </a>
                </div>
                <div className=''>
                    <div className='flex flex-col sm:flex-row justify-around bg-gray-900 rounded-md p-4'>
                        <p className='block'>Repo <span>{user.repo}</span> </p>
                        <p className='block'>Followers <span>{user.followers}</span></p>
                        <p className='block'>Following<span>{user.following}</span></p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                        <p className='flex items-center gap-2'>
                            <CiLocationOn className=''/>
                            <span>{user.location || "Location not available"}</span>
                        </p>
                    <p className='flex items-center gap-2'>
                        <FaLink />
                        <span>{user.blog?<a href={user.blog} target="_blank" className='text-blue-400 hover:underline'>{user.blog}</a> :  "No blog available"}</span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <FaTwitter className='text-blue-500'/>
                        <span>{user.twitter_username ? <a href={`https://twitter.com/${user.twitter_username}`} className="ttext-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@{user.twitter_username}</a> : "No Twitter account"}</span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <FaGithub className='text-blue-500'/>
                        <span><a href={user.html_url} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">@GitHub</a></span>
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