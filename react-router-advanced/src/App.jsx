import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Profile from "./components/Profile";
import { ProfileDetails } from "./components/Profile";
import { ProfileSettings } from "./components/Profile";
import BlogPost from "./BlogPost";
import Home from "./Home";

function App () {
    return (
        <Router>
            <div>
                <h2>Home</h2>
                <nav>
                    <Link to= "/Profile">Profile</Link>
                    <Link to= "/blog/1">Blog Post 1</Link>
                    <Link to= "/blog/2">Blog Post 2</Link>
                </nav>
                <Routes>
                    <Route path="/" element= {<Home />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
        
                    {/* Route to Profile component */}
                    <Route path="/Profile" element={<Profile />}>
                        <Route path="ProfileDetails" element= {<ProfileDetails />} />
                        <Route path="ProfileSettings" element = { <ProfileSettings />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;