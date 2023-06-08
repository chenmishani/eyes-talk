import React, { useState } from "react";
import {AiOutlineRightCircle} from "react-icons/ai";
import {AiOutlineLeftCircle} from "react-icons/ai";

export default function ChosenBracelet(props) {

  const right=<AiOutlineRightCircle size='25px'/>
  const left=<AiOutlineLeftCircle size='25px'/>
  const [flag,setFlag]=useState(false)

  const changePhoto=()=>{
    if (flag==false){
      return  <div>{props.chosenBracelet.photo}</div>
    }
    else{
      return <div style={{margin:'10px'}}>{props.chosenBracelet.photo}</div>
    }
  }

  return (
    <div className="chosenProductDiv">
         <div style={{margin:'0 auto'}}>
          <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
          <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}><div onClick={()=>{setFlag(!flag)}} >{left}</div></div>
          <div style={{}}>{changePhoto()}</div>
          <div style={{ display:'flex',justifyContent:'center',alignItems:'center'}}><div onClick={()=>{setFlag(!flag)}}>{right}</div></div>
          </div>
          </div>
      <div>
        <h1>{props.chosenBracelet.name}</h1>
        <p> צמיד בעבודת יד שעשוי מחרוזים איכותיים </p>
        <p>צבעים: {props.chosenBracelet.color} </p>
        <p style={{ fontSize: "25px" }}>{`₪ ${props.chosenBracelet.price} `}</p>
        <button
          className="btn3"
          onClick={() => {
            props.add(props.chosenBracelet.index);
          }}
        >
          הוספה לסל
        </button>
      </div>
    </div>
  );
}
