import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import viBlue from "./photos2/vi.png";

export default function ChainsList(props) {

  const plus = <AiOutlinePlusCircle size="18px" />;
  const minus = <AiOutlineMinusCircle size="18px" />;

  
  const showCnt = () => {
    if(props.price==180){
      if (props.cnt > 0) {
        return <div style={{height:'30px'}} onClick={()=>{props.delete(props.index)}}><img style={{ width: "40px" }} src={viBlue} alt="vi" /> </div> 
      } else {
        return ( <div style={{height:'30px'}}>
          <button
            className="btn2"
            onClick={() => {
              props.add(props.index);
            }}>
          For sale
          </button>
          </div>
        )
      }
    }
    else{
    if (props.cnt<1) {
      return (
        <div style={{height:'30px'}}> 
        <button
          className="btn2"
          onClick={() => {props.add(props.index) }}>
          For sale
        </button>
        </div>
      )
    }

    else {
      return (
        <div style={{ display: 'flex', justifyContent: 'center',height:'30px' }}>
          <div style={{ marginTop: '5px' }} onClick={() => { props.add2(props.index) }}> {plus}</div>
          <div style={{ marginLeft: '5px', marginRight: '5px', fontSize: '20px', border: '1px solid black', width: '25px' }}>{props.cnt}</div>
          <div style={{ marginTop: '5px' }} onClick={() => { props.delete(props.index)}}>{minus}</div>
        </div>

      )
    }
  }
}

  const showPrice = () => {
    if (props.price == 130) {
      return <div>
        <p style={{
          fontSize: "130%",
          marginTop: "0px",
          marginBottom: "10px",
          textAlign: 'left',
          marginLeft: '10px',
          marginTop: '0px'
        }}>
          <span className="sale">₪150</span> {`₪${props.price} `}</p>
      </div>
    }
    else if (props.price == 120) {
      return <div>
        <p style={{
          fontSize: "130%",
          marginTop: "0px",
          marginBottom: "10px",
          textAlign: 'left',
          marginLeft: '10px',
          marginTop: '0px'
        }}
        > <span className="sale">₪150</span> {`₪${props.price} `}</p>

      </div>
    }
    else {
      return <p
        style={{
          fontSize: "130%",
          marginTop: "0px",
          marginBottom: "10px",
          textAlign: 'left',
          marginLeft: '10px',
          marginTop: '0px'
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
        
      }}>

      <div style={{ height: "100%" }}>
        <Link to={"/chain"}>
          <div
            style={{
              marginTop: "20px",
              height: "100%",
              width: "100%",
              margin: "0 auto",
              paddingTop: '10px',
              
            }}
            onClick={() => { props.func(props.index) }}>
            {props.photo}
          </div>
        </Link>
      </div>

      <div>
        <div>
          <p style={{ fontSize: "130%", marginTop: "20px", textAlign: 'left', marginLeft: '10px', marginBottom: '0px' }}>{props.name} </p>
          <p style={{ textAlign: 'left', marginLeft: '10px', color: 'gray', marginTop: '0px' }}>שרשרת</p>
        </div>
        <div>
          {showPrice()}
        </div>
      </div>
      <div>
        <div>
            {showCnt()}
        </div>
      </div>
    </div>
  );
}
