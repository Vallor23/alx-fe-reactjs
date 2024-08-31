import { Routes, Route,Outlet, Link} from "react-router-dom";

function Profile() {

    return (
        <div>
              <h1>Profile</h1>
              <h3>Please select an option</h3>
              <ul>
                <li>
                    <Link to =  "/ProfileDetails">ProfileDetails</Link>
                </li>
                <li>
                    <Link to = "/ProfileSettings">ProfileSettings</Link>
                </li>
              </ul>
              <Outlet />
              <Routes>
                <Route path="ProfileDetails" element= {<ProfileDetails />} />
                <Route path="ProfileSettings" element = { <ProfileSettings />} />
              </Routes>
        </div>
  )
}

export const ProfileDetails = () => <h4>ProfileDetails</h4>
export const ProfileSettings = () => <h4>ProfileSettings</h4>

export default Profile;