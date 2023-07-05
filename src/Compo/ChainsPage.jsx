import React from "react";
import ChainsList from "./ChainsList";
import ChainListWeb from "./ChainListWeb";

export default function ChainsPage(props) {
  return (
    <div>
      <div className="chainMedia">
    <div className="productList">
      {props.arrChains.map((val, i) => {
        return (
          <ChainsList
            add={props.addChain}
            add2={props.add2}
            index={i}
            photo={val.photo}
            name={val.name}
            price={val.price}
            func={props.chosenChainCompo}
            cnt={val.cnt}
            delete={props.delete}
          />
        );
      })}
    </div>
    </div>
    <div className="chainWeb">
    <div className="productList">
      {props.arrChains.map((val, i) => {
        return (
          <ChainListWeb
            add={props.addChain}
            add2={props.add2}
            index={i}
            photo={val.photo}
            name={val.name}
            price={val.price}
            func={props.chosenChainCompo}
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
