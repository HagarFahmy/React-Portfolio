import './Navbar.css'
import {Link} from "react-router-dom"
function Navbar() {
  return (
  
    <div>
     
            <ul className='nav-ul'>
              <li className='nav-li'><Link to="/products">E-commerce</Link></li>
              <li className='nav-li'><Link to="/todo">Todo List</Link></li>
              <li className='nav-li'><Link to="/form">Form</Link></li>
              <li className='nav-li'><Link to="/about">About</Link></li>
            </ul>
         
         
    </div>
  )
}
export default Navbar