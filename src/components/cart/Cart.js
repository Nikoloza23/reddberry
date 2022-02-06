import { useParams} from 'react-router';
import React, {useState, useEffect} from 'react';
import { useDispatch} from 'react-redux';

function Cart() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
     const handleButton = (product) =>{
         dispatch(handleButton(product));
     }

    
    return (
        <div>
            <div className='row'>
            <div className="col-md-4">
                <img src={product.image} alt={product.title} 
                height="200px" width="180px" />
            </div>
            <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                    {product.qty} X ${product.price} = $
                    {product.qty * product.price} 
                </p>
                <button className="btn btn-outline-dark me-4"
                  onClick={()=>handleButton(product)}>
                    <i className="fa fa-minus"></i>
                </button>
                <button className="btn btn-outline-dark"
                  onClick={()=>handleButton(product)}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
         </div>
    </div>
    );
}

export default Cart;
