import  { useState } from 'react'

const SearchComponent = ({onSearch}) => {
const [username,setUsername] = useState('');
const [location,setLocation]=('');
const [minRepos,setMinRepos] = useState('');

const handleSubmit = (e) => {
    e.preventDefault()
    onSearch({username,location,minRepos})
}
    

  return (
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
  )
}

export default SearchComponent;