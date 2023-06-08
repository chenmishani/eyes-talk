import React from "react";
import { Link } from "react-router-dom";

export default function ChainsList(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #adcbd3",
        width: "30%",
        margin: "0 auto",
        marginTop: "10px",
      }}
    >
      <div>
        <p style={{ fontSize: "130%", marginTop: "20px" }}>{props.name} </p>
      </div>

      <div style={{ height: "100%" }}>
        <Link to={"/chain"}>
          <div
            style={{
              marginTop: "20px",
              height: "90%",
              width: "80%",
              margin: "0 auto",
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
        <p
          style={{
            fontSize: "130%",
            margin: "0 auto",
            marginTop: "0px",
            marginBottom: "10px",
          }}
        >{`₪ ${props.price} `}</p>
      </div>
      <div>
        <button
          className="btn2"
          onClick={() => {
            props.add(props.index);
          }}
        >
          הוספה לסל
        </button>
      </div>
    </div>
  );
}
