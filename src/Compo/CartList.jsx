import React from "react";
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineMinusCircle} from "react-icons/ai"

const plus = <AiOutlinePlusCircle size="18px" />;
const minus = <AiOutlineMinusCircle size="18px" />;



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

                  <div style={{display:'flex',justifyContent:'center'}}>
                 <div style={{marginTop:'5px'}} onClick={()=>{props.deleteProdauct(props.index)}}> {plus}</div>
                 <div style={{marginLeft:'5px',marginRight:'5px',fontSize:'20px'}}>{props.cnt}</div>
                 <div style={{marginTop:'5px'}}  onClick={()=>{props.deleteProdauct(props.index)}}>{minus}</div>
                 
                  </div>
                  
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
