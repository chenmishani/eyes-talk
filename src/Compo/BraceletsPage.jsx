import React from "react";
import BraceletsList from "./BraceletsList";
import BraceletsListWeb from "./BraceletsListWeb";
import { useEffect } from "react";

export default function BraceletsPage(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="braceletsMedia" >
        <div className="productList">
          {props.arrBracelets.map((val, i) => {
            return (
              <BraceletsList
                add={props.add}
                add2={props.add2}
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
      </div>
      <div className="braceletsWeb">
        <div className="productList">
          {props.arrBracelets.map((val, i) => {
            return (
              <BraceletsListWeb
                add={props.add}
                add2={props.add2}
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
      </div>
    </div>
  );
}
