import React from "react";
import ItemPage from "../component/ItemPage";

export default function Submarine() {
  return (
    <ItemPage
      description={`
        A submarine is a watercraft capable of underwater operation. 
        Submarines are used for various purposes, including military defense, scientific research, and exploration. 
        They are equipped with advanced technology to navigate and operate in deep-sea environments. 
        
        Modern submarines are powered by nuclear or diesel-electric engines, allowing them to remain submerged for extended periods. 
        Their stealth capabilities make them a critical asset in naval warfare and strategic deterrence.
      `}
    />
  );
}