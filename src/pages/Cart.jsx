
import { useSelector , useDispatch} from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import {remove} from "../store/cartSlice"

const Cart = ()=>{
    const dispatch = useDispatch();
    const cart_items = useSelector((state)=>state.cart)
    const handleRemove = (productid)=>{
        dispatch(remove(productid))
    } 
    return (
        <div className="cart-cards-box">
            {
                cart_items.map((items)=>(
                    <div className="cart_cards_cont" key={items.id}>
                        <img src={items.image} alt="" />
                        <h4>{items.title}</h4>
                        <h5>{items.price}</h5>
                        <button onClick={()=>handleRemove(items.id)}><DeleteIcon/></button>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart;