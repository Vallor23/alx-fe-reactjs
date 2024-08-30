import { Routes, Route, useRouteMatch, Link} from "react-router-dom";

function Profile() {
    //UseRouteMatch provides the current URL and path
    let {path, url} = useRouteMatch();

    return (
        <div>
              <h1>Profile</h1>
              <ul>
                <li>
                    <Link to = {`${url}/ProfileDetails`}>ProfileDetails</Link>
                </li>
                <li>
                    <Link to = {`${url}/ProfileSettings`}>ProfileSettings</Link>
                </li>
              </ul>
              <Routes>
                <Route exact path={path}>
                    <h3>Please select an option</h3>
                </Route>
                <Route path={`${path}/ProfileDetails`}>
                    <ProfileDetails />
                </Route>
                <Route path={`${path}/ProfileSettings`}>
                    <ProfileSettings />
                </Route>
              </Routes>
        </div>
  )
}

const ProfileDetails = () => <h4>ProfileDetails</h4>
const ProfileSettings = () => <h4>ProfileSettings</h4>

export default Profile;