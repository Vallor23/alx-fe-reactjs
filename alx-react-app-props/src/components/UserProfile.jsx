import UserContext from './UserContext';
import { useContext } from "react";

const UserProfile = () => {
    const {userData} = useContext(UserContext);
        return (
            <div>
              <h2>Name: {userData.name}</h2>
              <p>Email: {userData.email}</p>
            </div>
          );
};

export default UserProfile;