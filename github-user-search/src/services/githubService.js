import axios from 'axios'

const fetchUserData = async({username,location,minRepos}) => {
    let query = `${username}`;
    if(location) query += `+location:${location}`;
    if(minRepos) query += `+minRepos:${minRepos}`;
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`)
    return response.data.items
}

export default fetchUserData;