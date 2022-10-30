import React from 'react';


function Bar(props) {
    
    

  return (
    <div className="ExchangeRateChart-bar"
        key={props.bar.rate} 
        style={{width:  '50%', height:'50%', margin:"auto" , marginTop:"20px" }}>
            <div className="ExchangeRateChart-bar-text" >
                <p>{props.bar.currency}: <strong>{props.bar.rate}</strong> &emsp; {props.bar.date}</p>
            </div>
    </div>
  );
}

export default Bar;