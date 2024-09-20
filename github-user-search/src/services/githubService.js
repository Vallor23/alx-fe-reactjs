import axios from 'axios'

const fetchUserData = async(username) => {
    console.log(username)
    const response = await axios.get(`https://api.github.com/users/${username}`)
    return response.data
    
}



export default fetchUserData