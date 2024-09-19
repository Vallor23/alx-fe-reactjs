import  { useState } from 'react'
import fetchUserData from '../services/githubService';

const Search = () => {
const [username,setUsername] = useState('');

const [userData, setUserData] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

    const getUserData = async(username) => {
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (error) {
            setError(error)
        }
        setIsLoading(false)
    }
    // getUserData();

if(isLoading) return <p>Loading...</p>;
if(error) return <p>Looks like we cant find the user</p>;


const handleSubmit = (e) => {
    e.preventDefault();

    getUserData(username);
}

  return (
    <div onSubmit={handleSubmit} className='mt-6'>
        <form className="max-w-md mx-auto w-full lg:w-8/12">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    </div>
            <input 
                type="search"
                id="default-search" 
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Search Github Users..." 
                required 
                />
            <button 
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                {/* onClick={} */}
            </div>
        </form>
        <div>
            <div className='flex  mt-6 gap-4'>
                <img src={userData.avatar_url} alt="avatar"  className='rounded-full w-28 h-28'/>
                <h1 className='text-xl'>{userData.name}</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nisi officiis pariatur quos expedita, voluptas cum.</p>
            <div className='flex gap-8'>
                <div className='flex flex-col'>
                   <p>Repos</p>
                   <img src={userData.repos_url} alt="avatar"  className='rounded-full w-28 h-28'/>
                   <p>{userData.repos_url}</p>
                </div>
                <div className='flex flex-col'>
                   <p>Followers</p>
                   <p>{userData.followers_url}</p>
                </div>
                <div className='flex flex-col'>
                   <p>Following</p>
                   <p>{userData.following_url}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search