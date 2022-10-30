import React from "react";

const Form =()=>{
   return(
<div>
      <div className="header">
        <h1>Welcome to portal</h1>
        <hr />
        <p>please Login to continue..</p>
      </div>

      <div>
        <form className="form">
          <input type="text" placeholder="user name" />
          <input type="email" placeholder="User Email" required="[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$" />      
        </form>
      <div>

      </div>
      </div>
    </div>
    )
}
export default Form;