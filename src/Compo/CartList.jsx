import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function CartList(props) {
  const checkCart = () => {
    if (props.cart.length >= 1) {
      const trashIcon = <BsTrash3 size="40px" />;

      return (
        <div>
          <div
            onClick={() => {
              props.deleteCart();
            }}
          >
            {trashIcon}
          </div>

          <div
            style={{ display: "flex", paddingTop: "20px", flexWrap: "wrap" }}
          >
            {props.cart.map((val, i) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #adcbd3",
                    width: "20%",
                    margin: "10px auto",
                    }}
                >
                  <div>
                    <p style={{ fontSize: "120%", marginTop: "20px" }}>
                      {val.name}
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
                    {val.photo}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "120%",
                        margin: "0 auto",
                        marginTop: "20px",
                      }}
                    >{`₪ ${val.price} `}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ width: "40%", margin: "0 auto" }}>
            <h2 style={{ fontSize: "120%" }}> :סהכ לתשלום</h2>
            <h2 style={{ fontSize: "120%" }}>{`₪ ${props.temp} `}</h2>
          <Link to={'/order'}><button className="btn1">להמשך </button></Link> 
            
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ display:'flex',height: "350px"}}>
          <h1 style={{ fontSize: "250%", marginTop: "100px",marginBottom:'50px' }}>
            העגלה שלך ריקה
          </h1>
        </div>
      
      );
    }
  };

  return (
    <div
      style={{
        width: "90%",
        background: "white",
        margin: "0 auto",
        marginTop: "20px",
        marginBottom:'50px',
        padding: "10px",
        border: "solid 1px black",
      }}
    >
      <div className="cartDiv">{checkCart()}
      </div>
      
    </div>
  );
}
