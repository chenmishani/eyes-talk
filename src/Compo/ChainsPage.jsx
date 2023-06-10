import React from "react";
import ChainsList from "./ChainsList";

export default function ChainsPage(props) {
  return (
    <div className="productList">
      {props.arrChains.map((val, i) => {
        return (
          <ChainsList
            add={props.addChain}
            index={i}
            photo={val.photo}
            name={val.name}
            price={val.price}
            func={props.chosenChainCompo}
            cnt={val.cnt}
          />
        );
      })}
    </div>
  );
}
