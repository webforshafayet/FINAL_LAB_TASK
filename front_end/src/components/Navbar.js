import {Link} from  'react-router-dom';

const Navbar = ()=>{
    return (
        <div>
            <Link to='/'>Home</Link> |  
            <Link to='/add'>Create Event</Link> | 
            <Link to='/userlist'>Event list</Link>
        </div>
    );  
}
export default Navbar;