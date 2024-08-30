import { BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Profile from "./components/Profile";

function App () {
    return (
        <Router>
            <div>
                <nav>
                    <Link to= "/Profile">Profile</Link>
                </nav>
                <Routes>
                    {/* Route to Profile component */}
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/">
                        <h2>Home</h2>
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}

export default App;