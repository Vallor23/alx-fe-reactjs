import { Link } from "react-router-dom";

const Navbar =() =>{
    return (
        <nav  style={{
          backgroundColor: '#007BFF',
          padding: '10px 20px',
          borderBottom: '2px solid #0056b3'
          }}>
          <ul style={{
          listStyleType: 'none',
          margin: '0',
          padding: '0', 
          display: 'flex',
          justifyContent: 'space-around'
          }}>
            <li style={{ margin: '0 15px' }}>
              <Link to="/" style={{
              textDecoration: 'none',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: 'bold',
               transition: 'color 0.3s'
              }}>
                Home
                </Link>
            </li>
            <li>
              <Link to="/about"
               style={{
                textDecoration: 'none',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                transition: 'color 0.3s'
              }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact"
              style={{
              textDecoration: 'none',
              color: '#fff',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'color 0.3s'
              }}>
              Contact
              </Link>
            </li>
            <li>
              <Link to="/Services"
              style={{
                textDecoration: 'none',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                transition: 'color 0.3s'
              }}>
                Services
                </Link>
            </li>
          </ul>
        </nav>
    );
}
export default Navbar;