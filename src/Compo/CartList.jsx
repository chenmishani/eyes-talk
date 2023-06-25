import React from "react";

export default function CartList(props) {
 
      return (
      
        
          
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30%",
                    margin: "10px auto",
                  }}
                >
                  
                  <div style={{textAlign:'left'}}>x{props.cnt}</div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #adcbd3",
                    margin: "10px auto",
                    height:'90%'

                  }}
                >
                  <div>
                    <p style={{ fontSize: "120%", marginTop: "20px" }}>
                      {props.name}
                    </p>
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      height: "100%",
                      width: "100%",
                      margin: "0 auto",
                    }}
                  >
                    {props.photo}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "120%",
                        margin: "0 auto",
                        marginTop: "20px",
                      }}
                    >{`₪ ${props.price} `}</p>
                  </div>
                </div>
                </div>
              
            
   
         
      );
  
}
