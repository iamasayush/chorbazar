import React from "react";
import ItemPage from "../component/ItemPage";

export default function Tank() {
  return (
    <ItemPage
      description={`
        A tank is a heavily armored combat vehicle designed for frontline engagements. 
        Tanks are equipped with powerful cannons, machine guns, and advanced targeting systems. 
        They provide mobility, protection, and firepower, making them a key component of modern military forces. 
        
        Tanks are used in various combat scenarios, from open battlefields to urban warfare. 
        Their design has evolved over the years, incorporating advanced materials and technology to enhance their effectiveness and survivability.
      `}
    />
  );
}