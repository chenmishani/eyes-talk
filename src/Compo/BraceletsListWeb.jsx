import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function BraceletsList(props) {

  const [flag, setFlag] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showCnt = () => {
    if (flag == false) {
      return <button className="btn2"
        onClick={() => {
          props.add(props.index);
        }}
      >
        For sale
      </button>
    }
    else {
      return <div>
        <button style={{ width: '10px', border: '0px', background: 'white', fontSize: '20px' }} onClick={() => { props.delete(props.index) }}>
          -
        </button>
        <button className="btn2" style={{ width: '40px', margin: '10px' }}>
          {props.cnt}
        </button>
        <button style={{ width: '10px', border: '0px', background: 'white', fontSize: '20px' }} onClick={() => {
          props.add2(props.index);
        }}>
          +
        </button>

      </div>
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "23%",
        margin: "0 auto",
        marginTop: "15px",
      }}
    >
      <div style={{ height: "100%" }}>
        <Link to={"/bracelet"}>
          <div
            style={{
              marginTop: "20px",
              height: "100%",
              width: "100%",
              margin: "0 auto",
              paddingTop: '10px',
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
        <p style={{ fontSize: "130%", marginTop: "20px", textAlign: 'left', marginLeft: '10px', marginBottom: '0px' }}>{props.name} </p>
        <p style={{ textAlign: 'left', marginLeft: '10px', color: 'gray', marginTop: '0px' }}>צמיד</p>

      </div>

      <div>
        <p
          style={{
            fontSize: "130%",
            marginTop: "0px",
            marginBottom: "10px",
            textAlign: 'left',
            marginLeft: '10px',
            marginTop: '0px'
          }}
        >{`₪ ${props.price} `}</p>
      </div>
      <div>
        <div
          onClick={() => {
            setFlag(true)
          }}
        >
          {showCnt()}
        </div>
      </div>
    </div>
  );
}
