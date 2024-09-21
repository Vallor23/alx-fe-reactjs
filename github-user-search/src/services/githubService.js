import axios from 'axios'

const fetchUserData = async(username,location,minRepos) => {
    let query = `q=${username}`;
    if(location) query += `+location:${location}`;
    if(minRepos) query += `+minRepos:${minRepos}`;

    const response = await axios.get(`https://api.github.com/users?${query}`)
    return response.data.items
}

export default fetchUserData;