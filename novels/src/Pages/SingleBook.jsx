import { Link } from "react-router-dom"

export default function SingleBook(){
    const item= JSON.parse(localStorage.getItem("book"))||[]
    return (
        <div style={{width:"75%",margin:"auto",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",marginTop:"30px",padding:"20px"}}>
                    <div>
                    <img src={item.image}/>
                    <h2>{item.name}</h2>
                    <h2>₹{item.price}</h2>
                    <h3 style={{color:'grey'}}>Author: {item.author}</h3>
                    <img style={{width:"90px",height:"30px"}} src="https://clipart-library.com/2023/5-Stars-PNG-Clipart.png" alt="rating" />
                    <p>{item.details}</p>
                    <Link to="/payment"  style={{backgroundColor:"green",fontWeight:"bold",fontSize:"20px",paddingLeft:"10px",paddingRight:"10px",color:"white",cursor:"pointer",textDecoration:"none",border:"1.5px solid black"}}>Buy</Link>
                    
                   </div>

                   <Link to="/" style={{marginTop:"20px"}}>Go Back</Link>
        </div>
    )
   }

   //box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;