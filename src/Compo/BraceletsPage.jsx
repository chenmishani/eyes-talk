import React from "react";
import BraceletsList from "./BraceletsList";

export default function BraceletsPage(props) {
  return (
    <div className="productList">
      {props.arrBracelets.map((val, i) => {
        return (
          <BraceletsList
            add={props.add}
            index={i}
            photo={val.photo}
            name={val.name}
            price={val.price}
            func={props.chosenBraceletCompo}
            cnt={val.cnt}
            delete={props.delete}

          />
        );
      })}
    </div>
  );
}
