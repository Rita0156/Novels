
import Homepage from "./Homepage";
//import {Routes,Route} from "react-router-dom"
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Payment from "./Payment";
import SingleBook from "./SingleBook";

export default function AllRoutes(){
    return (
        <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/details" element={<SingleBook/>} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/payment" element={<Payment/>} />
        </Routes>
    )
}