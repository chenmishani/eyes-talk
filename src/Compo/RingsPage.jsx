import React from "react";
import RingsList from "./RingsList";
import RingsListWeb from "./RingsListWeb";

export default function RingsPage(props) {
  return (
    <div>
    <div className="braceletsMedia" >
    <div className="productList">
      {props.arrRings.map((val, i) => {
        return (
          <RingsList
            add={props.add}
            add2={props.add2}
            index={i}
            photo={val.photo}
            name={val.name}
            price={val.price}
            func={props.chosenRingCompo}
            cnt={val.cnt}
            delete={props.delete}

          />
        );
      })}
    </div>
    </div>
    <div className="braceletsWeb">
    <div className="productList">
      {props.arrRings.map((val, i) => {
        return (
          <RingsListWeb
            add={props.add}
            add2={props.add2}
            index={i}
            photo={val.photo}
            name={val.name}
            price={val.price}
            func={props.chosenRingCompo}
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
