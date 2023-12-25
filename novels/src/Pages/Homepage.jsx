import { useEffect, useState } from "react";
import "./home.css"
import { Link } from "react-router-dom";
import "../components/navbar.css"
//const { default: Navbar } = require("../components/Navbar");

export default function Homepage(){
    const [data,setData]=useState([])
    const [tot,setTot]=useState(0)
    const [search,setSearch]=useState('')
    
    useEffect(()=>{
        fetch("http://localhost:7000/novel")
        .then((req)=>{
            return req.json()
        })
        .then((res)=>{
            console.log(res);
            setTot(res.length)
            setData([...res])
        })
    },[])
    return (
        <div style={{width:"98%",margin:"auto"}}>
            
            <div className="nav">
            <Link to="/">
                <div className="logo">
                  <img  src="https://www.freeiconspng.com/thumbs/book-icon/book-stack-icon--icon-search-engine-16.png" alt="books" />
                  <h2 style={{color:"red"}}>Reader's Book</h2>
                </div>
            </Link>

            
            
        
            </div>
            <h3>Total Books : {tot}</h3>
            
            <div className="append">
               {(data.length>0 && data!=undefined)?data.map((item)=>(
                <Link onClick={()=>{
                    localStorage.setItem("book",JSON.stringify(item))
                }} to="/details" style={{textDecoration:"none",color:"black"}}>
                    <div key={item._id} className="div">
                    <img src={item.image}/>
                    <h2>{item.name}</h2>
                    <h2>₹{item.price}</h2>
                    <h3 style={{color:'grey'}}>Author: {item.author}</h3>
                   </div>
                </Link>
               )):<div>Loading......</div>}
            </div>
        </div>
    )
}