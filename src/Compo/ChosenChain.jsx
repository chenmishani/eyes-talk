import React, { useState } from "react";
import {AiOutlineRightCircle} from "react-icons/ai";
import {AiOutlineLeftCircle} from "react-icons/ai";
import suprise from './suprise.jpg'

export default function ChosenChain(props) {

  const right=<AiOutlineRightCircle size='25px'/>
  const left=<AiOutlineLeftCircle size='25px'/>
  const [flag,setFlag]=useState(false)

  const changePhoto=()=>{
    if (flag==false){
      return  <div>{props.chosenChain.photo}</div>
    }
    else{
      return <div style={{margin:'10px'}}>{props.chosenChain.photo1}</div>
    }
  }

  const showDiv = () => {
    if (props.chosenChain.price == 200) {
      return (

<div className="chosenProductDiv">
             <div style={{margin:'0 auto'}}>
          <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
          <div style={{}}><img style={{width:'50%'}} src={suprise} alt="logo"  /></div>
          </div>
          </div>
          <div style={{margin:'0 auto'}}>
            <h1>{props.chosenChain.name}</h1>
            <p>
              {" "}
              שרשרת יחודית שמיוצרת לאדם אחד בלבד,הצבע אקראי ולא ניתן לבחירה
            </p>
            <p
              style={{ fontSize: "25px", marginTop: "50px" }}
            >{`₪ ${props.chosenChain.price} `}</p>
            <button
              className="btn3"
              onClick={() => {
                props.add(props.chosenChain.index);
              }}
            >
              הוספה לסל
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="chosenProductDiv">
          <div style={{margin:'0 auto'}}>
          <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
          <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}><div onClick={()=>{setFlag(!flag)}} >{left}</div></div>
          <div style={{}}>{changePhoto()}</div>
          <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}><div onClick={()=>{setFlag(!flag)}}>{right}</div></div>
          </div>
          </div>
          <div >
            <h1 >{props.chosenChain.name}</h1>
            <p style={{ marginTop: "50px" }}>
              שרשרת בעבודת יד שעשויה מחרוזים איכותיים
            </p>
            <p>צבעים: {props.chosenChain.color} </p>
            <p
              style={{ fontSize: "25px", marginTop: "40px" }}
            >{`₪ ${props.chosenChain.price} `}</p>
            <button
              className="btn3"
              onClick={() => {
                props.add(props.chosenChain.index);
              }}
            >
              הוספה לסל
            </button>
          </div>
        </div>
      );
    }
  };

  return <div>{showDiv()}</div>;
}
