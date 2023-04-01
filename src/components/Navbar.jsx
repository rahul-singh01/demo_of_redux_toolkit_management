
import {Link} from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const Navbar = ()=>{
    const cart_items = useSelector((state)=> state.cart)
    return(
        <div className="navbar-header">
            <div>
                Demo Redux
            </div>
            <div className='nav-right-content'>
                <Link className='nav-cont' to="/">
                    Home
                </Link>
                <Link className='nav-cont' to="/cart">
                    Cart
                </Link>
            </div>
            <span>
                <Link to="/cart">
                    <ShoppingCartIcon/>
                </Link> 
                <p>{cart_items.length}</p>
            </span>

        </div>
    )
}

export default Navbar;