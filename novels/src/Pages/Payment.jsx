import { useState } from 'react'
import './pay.css'
import { Navigate,useNavigate } from 'react-router-dom'
export default function Payment(){
    const [cardNo,setCard]=useState('')
    const [year,setYear]=useState('')
    const [month,setMonth]=useState('')
    const [cvv,setCvv]=useState('')
    const nevigate=useNavigate()
    const handalSubmit=(e)=>{
        e.preventDefault();
         if(cardNo&&year&&month&&cvv){
            checkOTP();
        }
        else{
            alert("Please fill all the parameters !!");
        }
         
    };
    function checkOTP(){
        let otp = Math.floor(1000 + Math.random() * 9000);
    
        alert("Your OTP is " + otp);
    
        let verifyOtp = prompt("Enter OTP ");
    
        if(otp == verifyOtp){
            let paymentCont = document.getElementById("payment-container");
            let thankyouImg = document.querySelector(".thankyou-img");
            paymentCont.style.display = "none";
            thankyouImg.style.display = "block"
            setTimeout(function(){
              nevigate('/');
           },2000);
        }else{
            alert("Wrong OTP");
        }
    }
    return (
        <div id="payment-container" >
               <div className="left-div">
            <div className="user-info">
                <img src="./image/Learn Fast.png" alt=""/>
                
            </div>
          <div className="animation">
            <img src="https://cdn.dribbble.com/users/544967/screenshots/17486588/media/40c9324ce1576c26c9efa0f773d8b791.gif" alt=""/>
          </div>
        </div>
        <div className="payment-info">
            
            <div id="container">
                <h1>Select a Payment Method</h1>
                <div>
                  <h3>We Accept</h3>
                  <div>
                    <img src="https://ii2.pepperfry.com/assets/w23-pf-visa.jpg" alt="" />
                    <img
                      src="https://ii3.pepperfry.com/assets/w23-pf-master-card.jpg"
                      alt=""
                    />
                    <img
                      src="https://ii1.pepperfry.com/assets/w23-pf-maestro.jpg"
                      alt=""
                    />
          
                    <img src="https://ii3.pepperfry.com/assets/w23-pf-rupay.jpg" alt="" />
          
                    <img
                      src="https://ii3.pepperfry.com/assets/w23-pf-wallet.jpg"
                      alt=""
                    />
                    <img
                      src="https://ii3.pepperfry.com/assets/w23-pf-net-banking.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <h3>Card Details</h3>
                <form onSubmit={handalSubmit}>
                  <label for="">Card Number</label>
                  <input
                    type="number"
                    id="cardnumber"
                    
                    placeholder="Card Number"
                    value={cardNo} onChange={(e)=>{setCard(e.target.value)}}
                  />
                  <div>
                    <label for="">Expiry Month</label>
                    <input
                      type="number"
                      id="expirymonth"
                      
                      placeholder="MM"
                      value={month} onChange={(e)=>{setMonth(e.target.value)}}
                    />
                    <label for="">Expiry Year</label>
                    <input type="number" id="expiryyear" value={year} onChange={(e)=>{setYear(e.target.value)}}  placeholder="YY" />
                    <label for="">Security Code</label>
                    <input type="number" id="cvv" value={cvv} onChange={(e)=>{setCvv(e.target.value)}}   placeholder="CVV" />
                  </div>
                  <input type="submit" value="PROCEED TO PAY 🔒" id="submit" />
                </form>
              </div>
        </div>
       
    

    <img src="https://cdn.dribbble.com/users/1072657/screenshots/3533171/media/422d50d9b690e54c5d4743f14073056a.gif" alt="" className="thankyou-img"/>


        </div>
    )
   }
