import React from 'react';
import './Contact.css';

const Contact= () => {
    return(
        <div className= "Section">
          <div className= "Container">
          <div className='Left'>
          <img  src = "./img/world-map.png"></img>
          </div>
            <div className= "Right">
              <form className= "Form">
                <h1>Contact Us</h1>
                <input className="Input" placeholder="Name"></input>
                <input className="Input" placeholder="Email"></input>
                <textarea className="TextArea" placeholder="Write your message" rows={10}></textarea>
                <button className="Button">Send</button>
              </form>
            </div>
          </div>
        </div>
    )

}

export default Contact