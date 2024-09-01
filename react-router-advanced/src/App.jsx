import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Profile from "./components/Profile";
import { ProfileDetails } from "./components/Profile";
import { ProfileSettings } from "./components/Profile";
import BlogPost from "./BlogPost";
import Home from "./Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";


function App () {
    return (
        <Router>
            <div>
                <h2>Home</h2>
                <nav style={{display: 'flex', justifyContent: 'space-between', width: '50%'}}>
                    <Link to= "/profile">Profile</Link>
                    <Link to= "/blog/1">Blog Post 1</Link>
                    <Link to= "/blog/2">Blog Post 2</Link>
                    <Link to= "/Login">Login</Link>
                </nav>
                <Routes>
                    {/* Default route to Home component */}
                    <Route path="/" element= {<Home />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
        
                    {/* Public route to login component */}
                    <Route path="/login" element={<Login />}/>

                    {/* ProtectedRoute to Profile component */}
                    <Route path="/profile/*"  element= {<ProtectedRoute element={<Profile />} />}>
                        <Route path="ProfileDetails" element= {<ProfileDetails />} />
                        <Route path="ProfileSettings" element = { <ProfileSettings />} />
                    </Route>
                </Routes>        
            </div>
        </Router>
    )
}

export default App;