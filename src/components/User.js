import React, { useState } from "react";

function User(){
    const [count,setCount] = useState(0);
    return(<div>
        <h1>This is User Value is {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>update value</button>
    </div>)
}
export default User;