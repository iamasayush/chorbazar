import React from "react";
import ItemPage from "../component/ItemPage";

export default function Mortar() {
  return (
    <ItemPage
      description={`
        A mortar is a short, smoothbore gun designed to fire shells at high angles. 
        Mortars are commonly used in military operations to provide indirect fire support, 
        allowing troops to engage targets hidden behind obstacles or at long distances. 
        
        These weapons are lightweight and portable, making them ideal for use in a variety of terrains and combat scenarios. 
        Modern mortars are equipped with advanced targeting systems, enabling greater accuracy and effectiveness on the battlefield.
      `}
    />
  );
}