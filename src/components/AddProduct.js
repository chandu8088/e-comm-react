import React, { useState } from "react";

const AddProduct = ()=>{
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [category,setCategory]=useState("");
    const [company,setCompany]=useState("");
    const [error,setError] = useState(false);
    const addProduct=async()=>{
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result =await fetch("https://e-commerse-chandra.herokuapp.com/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result)
    }
    return(
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" placeholder="Enter Product Name" className="inputBox"
            onChange={(e)=>{setName(e.target.value)}} value={name}/>
            {error && !name && <span className="invalid-input">Enter a valid name</span>}
            <input type="text" placeholder="Enter Product Price" className="inputBox"
            onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
            {error && !price && <span className="invalid-input">Enter a valid price</span>}
            <input type="text" placeholder="Enter Product Category" className="inputBox"
            onChange={(e)=>{setCategory(e.target.value)}} value={category}/>
            {error && !category && <span className="invalid-input">Enter a valid category</span>}
            <input type="text" placeholder="Enter Product Company" className="inputBox"
            onChange={(e)=>{setCompany(e.target.value)}} value={company}/>
            {error && !company && <span className="invalid-input">Enter a valid company</span>}
            <button onClick={addProduct} className="product-button">Add product</button>
        </div>
    )
}
export default AddProduct;