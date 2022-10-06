import React, { useState } from "react";

const ContactCard = () => {
  const [] = useState();
  return (
    <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile"></img>
      <div className="user-details">
        <p>Name: Jenny Han</p>
        <p>Email: jenny.han@notreal.com</p>
        <p>Age: 25</p>
      </div>
    </div>
  );
};

export default ContactCard;
