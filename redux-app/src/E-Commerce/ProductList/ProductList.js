import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../../redux-Slices/Product/productSlice';
import Product from './Product';

function ProductList() {

    const dispatch = useDispatch();
    const product = useSelector((state)=> state.productReducer.products);


    async function fetchData(){
        const response = await fetch('https://api.escuelajs.co/api/v1/products')
        let data = await response.json();
        console.log(data);
        dispatch(setProduct(data));
    }

    useEffect(()=> {

        fetchData();

    },[])


  return (
    <div>

        {product.map((item)=>(
            <Product key={item.id} product ={item}/>
        ))}

    </div>
  )
}

export default ProductList;