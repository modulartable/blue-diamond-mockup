import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div id="contactContainer">
             <div className="contactChildren">
               <h2>Send us a message!</h2>
             </div>
       <div className="contactChildren">
         <input className="contactForm" type="text" placeholder="Name" required></input>
         </div>
         <div className="contactChildren">
<input className="contactForm" type="email" placeholder="Email" required></input>
       </div>
       <div className="contactChildren">
<input className="contactForm" type="number" placeholder="Phone Number" required></input>
       </div>
       <div className="contactChildren">
<input id="messageArea" className="contactForm" type="text" placeholder="Message?" required></input>
       </div>
       <div className="contactChildren">
        <button id="submitBtn" type="submit" onClick={() => {window.alert("Thank you for your message!")}}>Submit</button>
       </div>
        </div>
    )
}

export default Contact
