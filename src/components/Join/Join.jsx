import React, { useRef } from "react";
import "./Join.css";

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form action={form} className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email address" onSubmit={sendEmail}
          />
          <button className="btn btn-j">join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
