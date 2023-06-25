import React from "react";
import Sale from "./Sale";

export default function SalePage(props) {
  return (
    <div className="productList">
      {props.saleArr.map((val, i) => {
        return (
          <Sale
            add={props.add}
            index={i}
            photo={val.photo}
            name={val.name}
            price={val.price}
            func={props.add}
            cnt={val.cnt}
            delete={props.delete}
          />
        );
      })}
    </div>
  );
}
