import { useEffect, useState } from "react";
import "./home.css"
import { Link } from "react-router-dom";
const { default: Navbar } = require("../components/Navbar");

export default function Homepage(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:7000/novel")
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            console.log(res);
            setData([...res])
        })
    },[])
    return (
        <div style={{width:"98%",margin:"auto"}}>
            <Navbar/>
            <div className="append">
               {(data.length>0 && data!=undefined)?data.map((item)=>(
                <Link to="/details" style={{textDecoration:"none",color:"black"}}>
                    <div key={item._id} className="div">
                    <img src={item.image}/>
                    <h2>{item.name}</h2>
                    <h2>₹{item.price}</h2>
                    <h3>Author: {item.author}</h3>
                   </div>
                </Link>
               )):<div>Loading......</div>}
            </div>
        </div>
    )
}