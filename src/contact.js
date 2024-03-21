import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact">
        <div className="upperdiv">
            <div className="first_row">
                <h3>Get to Know Us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Science</p>
            </div>
            <div className="first_row">
                <h3>Connect with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className="first_row">
                <h3>Make Money with Us</h3>
                <p>Sell on Amazon</p>
                <p>Sell under Amazon Accelerator</p>
                <p>Protect and Build Your Brand</p>
                <p>Amazon Global Selling</p>
                <p>Become an Affiliate</p>
                <p>Fulfilment by Amazon</p>
                <p>Advertise Your Products</p>
                <p>Amazon Pay on Merchants</p>
            </div>
            <div className="first_row">
                <h3>Let Us Help You</h3>
                <p>COVID-19 and Amazon</p>
                <p>Your Account</p>
                <p>Returns Centre</p>
                <p>100% Purchase Protection</p>
                <p>Amazon App Download</p>
                <p>Help</p>
            </div>
        </div>
        <div className="lowerdiv">
            <div className="first_line">
                <span className="amaozon_logo">
                <a href="www.google.com"><img
                className="header_logo" 
                src="data:image/png;base64,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" alt=""
                />
                </a>
                </span>
                <span className="header__op">
                <img src="https://flagsapi.com/IN/flat/64.png" alt="not found"/>
                        <select>
                            <option value="EN">English</option>
                        </select>
                </span>
            </div>
            <div className="second_line">
                <span className="comp">Australia</span>
                <span className="comp">Brazil</span>
                <span className="comp">Cannada</span>
                <span className="comp">China</span>
                <span className="comp">France</span>
                <span className="comp">Germany</span>
                <span className="comp">Italy</span>
                <span className="comp">Japan</span>
                <span className="comp">Mexico</span>
                <span className="comp">Netherlans</span>
                <span className="comp">Poland</span>
                <span className="comp">Singapore</span>
                <span className="comp">Spain</span>
                <span className="comp">Turkey</span>
                <span className="comp">United Arab Emirates</span>
            </div>
        </div>
    </div>
  )
}

export default Contact;