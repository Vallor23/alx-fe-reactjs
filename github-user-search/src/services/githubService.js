import axios from 'axios'

const fetchUserData = async({username,location,repos}) => {
    let query = `${username}`;
    if(location) query += `+location:${location}`;
    if(repos) query += `+repos:${repos}`;
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`)
    return response.data.items
}

export default fetchUserData;