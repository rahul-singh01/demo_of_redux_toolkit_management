import React , {useState , useEffect} from 'react';

import { useDispatch  , useSelector} from 'react-redux';
import { add } from "../store/cartSlice"
import { fetchProduct } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';


const Products = ()=>{
    // const [products , setproducts] = useState([])
    const dispatch  = useDispatch();

    const { data : products , status } = useSelector((state)=>state.product)
    
    useEffect(()=>{

        dispatch(fetchProduct())
        // const fetchproducts = async () =>{
        //     const res = await fetch("https://fakestoreapi.com/products")
        //     const data = await res.json()
        //     setproducts(data)
        // }
        // fetchproducts()
    },[])

    const handleAdd = (product)=>{
        dispatch(add(product))
    }

    if(status === STATUSES.LOADING){
        return <h1>Loading ...</h1>
    }

    if(status === STATUSES.ERROR){
        return <h1>Something Went Wrong...</h1>
    }
       

    return <div className="productswrapper">
        {
            products.map(product =>(
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={()=>handleAdd(product)} className='btn'> Add + </button>
                </div>
            ))
        }
    </div>
}

export default Products;