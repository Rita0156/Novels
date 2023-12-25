import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar(){
    return (
        <div className="nav">
            <Link to="/">
                <div className="logo">
                  <img src="https://www.freeiconspng.com/thumbs/book-icon/book-stack-icon--icon-search-engine-16.png" alt="books" />
                  <h2 style={{color:"red"}}>Reader's Book</h2>
                </div>
            </Link>

            <Link>
            <div className="logo">
              <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="cart" />
               <h2>Cart</h2>
            </div>
            </Link>
            
        </div>
    )
}