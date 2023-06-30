import React, { useState } from "react";
import suprise from './photos2/suprise.jpg'
import viBlue from './photos2/vi.png'

export default function Suprise(props) {

   
    const [flag, setFlag] = useState(false);

    const supriseDiv=()=>{
        if(flag==true||props.arrchains[0].cnt>0){
          return <img style={{width:'40px'}} src={viBlue} alt="vi" />
        }
        else{
          return  <button
          className="btn3"
          onClick={() => {
            props.add(0);
          }}
        >
          הוספה לסל
        </button>
        }
      }

  return (
    
    <div className="chosenProductDiv">
                 <div style={{margin:'0 auto'}}>
              <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
              <div style={{}}><img style={{width:'50%'}} src={suprise} alt="logo"  /></div>
              </div>
              </div>
              <div style={{margin:'0 auto'}}>
                <h1>{props.arrchains[0].name}</h1>
                <p>
                  {" "}
                  שרשרת יחודית שמיוצרת לאדם אחד בלבד,הצבע אקראי ולא ניתן לבחירה
                </p>
                <p
                  style={{ fontSize: "25px", marginTop: "50px" }}
                >{`₪ ${props.arrchains[0].price} `}</p>
                  <div
              onClick={() => {
                setFlag(true);
              }}
            >
              {supriseDiv()}
            </div>
              </div>
            </div>
          );
        }
  

