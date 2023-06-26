import React from "react";
import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartList from "./CartList";

export default function CartPage(props) {

    const trashIcon = <BsTrash3 size="40px" />;

    const deleteProduct=()=>{
      for (let index = 0; index < props.cart.length; index++) {
        if(props.cart[index].cnt==0){
          const newArray = [...props.cart]; 
          newArray.splice(index, 1); 
          props.setCart(newArray); 
         }
        
      }
     }

  const checkCart = () => {
    if (props.cart.length >= 1) {
      
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
                   <CartList

                  index={i}
                  photo={val.photo}
                  name={val.name}
                  price={val.price}
                  cnt={val.cnt}
                  delete={props.delete} />
                    );
                  })}
                         
          </div>
          <div style={{ width: "40%", margin: "0 auto" }}>
            <h2 style={{ fontSize: "120%" }}> :סהכ לתשלום</h2>
            <h2 style={{ fontSize: "120%" }}>{`₪ ${props.temp} `}</h2>
            <Link to={"/order"}>
              <button className="btn1">להמשך </button>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ display: "flex", height: "350px" }}>
          <h1
            style={{
              fontSize: "250%",
              marginTop: "100px",
              marginBottom: "50px",
            }}
          >
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
        marginBottom: "50px",
        padding: "10px",
        border: "solid 1px black",
      }}
    >
      <div className="cartDiv">{checkCart()}
      {deleteProduct()}</div>
    </div>
  );
}
