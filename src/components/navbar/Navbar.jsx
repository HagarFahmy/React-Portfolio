import './Navbar.css'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
     
            <ul>
          
            <li><Link to="/products">E-commerce</Link></li>
            <li><Link to="/todo">Todo List</Link></li>
            <li><Link to="/about">About</Link></li>
            </ul>
         
    </div>
  )
}
export default Navbar