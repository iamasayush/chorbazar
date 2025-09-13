import React from "react";
import ItemPage from "../component/ItemPage";

export default function Rocket() {
  return (
    <ItemPage 
      description={`
        A rocket is a vehicle, missile, or spacecraft propelled by rocket engines. 
        Rockets are used for a variety of purposes, including space exploration, 
        military applications, and scientific research. 
        
        Unlike jet engines, rocket engines carry both fuel and oxidizers, 
        allowing them to operate in the vacuum of space. 
        Rockets have played a pivotal role in advancing human knowledge and technology, 
        enabling missions to the Moon, Mars, and beyond.
      `}
    />
  );
}