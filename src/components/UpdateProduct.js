import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct = ({something})=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        getProductDetails();
    },[])
    const getProductDetails =async()=>{
        let result = await fetch(`https://e-commerse-chandra.herokuapp.com/product/${params.id}`)
        result = await result.json();
        setName(result.name)
        setPrice(result.price);
        setCategory(result.category)
        setCompany(result.company)
    }
    const updateProduct=async()=>{
        let result = await fetch(`https://e-commerse-chandra.herokuapp.com/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json();
        console.log(result)
        navigate('/')
    }
    return(
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Product Name" className="inputBox"
            onChange={(e)=>{setName(e.target.value)}} value={name}/>
            <input type="text" placeholder="Enter Product Price" className="inputBox" 
            value={price}
            onChange={(e)=>{setPrice(e.target.value)}}/>
            <input type="text" placeholder="Enter Product Category" className="inputBox"
            onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
            <input type="text" placeholder="Enter Product Company" className="inputBox"
            onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
            <button onClick={updateProduct} className="product-button">Update product</button>
        </div>
    )
}
export default UpdateProduct;