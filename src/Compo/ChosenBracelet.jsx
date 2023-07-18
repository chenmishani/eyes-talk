import React, { useState } from "react";


export default function ChosenBracelet(props) {


  const [flag, setFlag] = useState(false);

 
  const showCnt = () => {
    if (flag == false) {
      return (
        <button
          className="btn2"
          onClick={() => {
            props.add()
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
              props.delete();
            }}
          >
            -
          </button>
          <button className="btn2" style={{ width: "25px",textAlign:'center',justifyContent:'center',margin:'5px' }}>
            {props.chosenBracelet.cnt}
          </button>
          <button
            style={{
              width: "10px",
              border: "0px",
              background: "white",
              fontSize: "20px",
            }}
            onClick={() => {
              props.add();
            }}
          >
            +
          </button>
        </div>
      );
    }
  };



  return (
    <div style={{marginBottom:'20px'}}>
      <div className="chosenBraceletMedia">
        <div className="chosenProductDiv">
          <div style={{ margin: "0 auto" }}>
            <div className="photo-gallery" style={{ height: "300px" }}>
              <div className="scrollable-container">
                <div className="photo-wrapper">
                  {props.chosenBracelet.photo1}
                </div>
                <div className="photo-wrapper">
                  {props.chosenBracelet.photo}
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "0 auto" }}>
            <h1>{props.chosenBracelet.name}</h1>
            <p> צמיד בעבודת יד שעשוי מחרוזים איכותיים </p>
            <p>צבעים: {props.chosenBracelet.color} </p>
            <p
              style={{ fontSize: "25px" }}
            >{`₪ ${props.chosenBracelet.price} `}</p>
            <div
              onClick={() => {
                setFlag(true);
              }}
            >
              {showCnt()}
            </div>
          </div>
        </div>
      </div>
      <div className="chosenBraceletWeb">
        <div className="chosenProductDiv">
          <div style={{ margin: "0 auto", display: "flex" }}>
            <div style={{height:'300px'}}>{props.chosenBracelet.photo}</div>
            <div>{props.chosenBracelet.photo1}</div>
          </div>

          <div style={{ margin: "0 auto" }}>
            <h1>{props.chosenBracelet.name}</h1>
            <p> צמיד בעבודת יד שעשוי מחרוזים איכותיים </p>
            <p>צבעים: {props.chosenBracelet.color} </p>
            <p
              style={{ fontSize: "25px" }}
            >{`₪ ${props.chosenBracelet.price} `}</p>
            <div
              onClick={() => {
                setFlag(true);
              }}
            >
              {showCnt()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
