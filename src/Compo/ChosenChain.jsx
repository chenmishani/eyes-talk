import React, { useState } from "react";
import suprise from "./photos2/suprise.jpg";
import viBlue from "./photos2/vi.png";

export default function ChosenChain(props) {


  const [flag, setFlag] = useState(false);


  const showCnt = () => {
    if (flag == false) {
      return (
        <button
          className="btn2"
          onClick={() => {
            props.add();
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
              props.delete(props.chosenChain.index);
            }}
          >
            -
          </button>
          <button
            className="btn2"
            style={{
              width: "25px",
              textAlign: "center",
              justifyContent: "center",
              margin: "5px",
            }}
          >
            {props.chosenChain.cnt}
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

  const supriseDiv = () => {
    if (flag == true || props.chosenChain.cnt > 0) {
      return <img style={{ width: "40px" }} src={viBlue} alt="vi" />;
    } else {
      return (
        <button
          className="btn3"
          onClick={() => {
            props.add();
          }}
        >
          הוספה לסל
        </button>
      );
    }
  };

  const showDiv = () => {
    if (props.chosenChain.price == 180) {
      return (
        <div className="chosenProductDiv">
          <div style={{ margin: "0 auto" }}>
            <div
              style={{ display: "flex", flexDirection: "row", width: "100%" }}
            >
              <div style={{}}>
                <img style={{ width: "50%" }} src={suprise} alt="logo" />
              </div>
            </div>
          </div>
          <div style={{ margin: "0 auto" }}>
            <h1>{props.chosenChain.name}</h1>
            <p>
              {" "}
              שרשרת יחודית שמיוצרת לאדם אחד בלבד,הצבע אקראי ולא ניתן לבחירה
            </p>
            <p
              style={{ fontSize: "25px", marginTop: "50px" }}
            >{`₪ ${props.chosenChain.price} `}</p>
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
    } else {
      return (
        <div className="chosenProductDiv">
          <div style={{ margin: "0 auto" }}>
              <div className="photo-gallery" style={{height:'300px'}}>
              <div className="scrollable-container">
                <div className="photo-wrapper">
                {props.chosenChain.photo}
                </div>
                <div className="photo-wrapper">
                {props.chosenChain.photo1}
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "0 auto" }}>
            <h1 style={{ marginLeft: "10px" }}>{props.chosenChain.name}</h1>
            <p style={{ marginTop: "50px" }}>
              שרשרת בעבודת יד שעשויה מחרוזים איכותיים
            </p>
            <p>צבעים: {props.chosenChain.color} </p>
            <p
              style={{ fontSize: "25px", marginTop: "40px" }}
            >{`₪ ${props.chosenChain.price} `}</p>
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
  };

  return <div>{showDiv()}</div>;
}
