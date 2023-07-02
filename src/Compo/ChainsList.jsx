import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function ChainsList(props) {
  const [flag, setFlag] = useState(false);

  const showCnt = () => {
    if (flag == false) {
      return (
        <button
          className="btn2"
          onClick={() => {
            props.add(props.index);
          }}
        >
          הוספה לסל
        </button>
      );
    } else {
      return (
        <div>
          <button
            style={{
              width: "10px",
              border: "0px",
              background: "white",
              fontSize: "20px",
              }}
            onClick={() => {
              props.delete(props.index);
            }}
          >
            -
          </button>
          <button className="btn2" style={{ width: "25px",textAlign:'center',justifyContent:'center',margin:'10px' }}>
            {props.cnt}
          </button>
          <button
            style={{
              width: "10px",
              border: "0px",
              background: "white",
              fontSize: "20px",
            }}
            onClick={() => {
              props.add2(props.index);
            }}
          >
            +
          </button>
        </div>
      );
    }
  };

  const showPrice=()=>{
    if(props.price==130){
      return <div>
       <p style={{ fontSize: "130%",
        marginTop: "0px",
        marginBottom: "10px",
        textAlign:'left',
        marginLeft:'10px',
        marginTop:'0px'}}
        > <span className="sale">₪150</span> {`₪${props.price} `}</p> 
   
       </div>
    }
    else if(props.price==120){
      return <div>
      <p style={{ fontSize: "130%",
       marginTop: "0px",
       marginBottom: "10px",
       textAlign:'left',
       marginLeft:'10px',
       marginTop:'0px'}}
       > <span className="sale">₪150</span> {`₪${props.price} `}</p> 
  
      </div>
    }
    else{    
      return <p
      style={{
        fontSize: "130%",
        marginTop: "0px",
        marginBottom: "10px",
        textAlign:'left',
        marginLeft:'10px',
        marginTop:'0px'
      }}
    >{`₪ ${props.price} `}</p>
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "45%",
        margin: "0 auto",
        marginTop: "10px",
      }}
    >
      
      <div style={{ height: "100%" }}>
        <Link to={"/chain"}>
          <div
            style={{
              marginTop: "20px",
              height: "100%",
              width: "100%",
              margin: "0 auto",
              paddingTop:'10px',
              backgroundColor:' rgb(249, 248, 248)'
            }}
            onClick={() => {
              props.func(props.index);
            }}
          >
            {props.photo}
          </div>
        </Link>
      </div>

      <div>
      <div>
        <p style={{ fontSize: "130%", marginTop: "20px", textAlign:'left',marginLeft:'10px',marginBottom:'0px' }}>{props.name} </p>
        <p style={{ textAlign:'left',marginLeft:'10px',color:'gray',marginTop:'0px'}}>שרשרת</p>
      </div>
      <div>
       {showPrice()}
       </div>
      </div>
      <div>
        <div
          onClick={() => {
            setFlag(true);
          }}
        >
          {showCnt()}
        </div>
      </div>
    </div>
  );
}
