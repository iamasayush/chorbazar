import React from "react";
import ItemPage from "../component/ItemPage";

export default function TankMine() {
  return (
    <ItemPage 
      description={`
        A tank mine is an explosive device designed to disable or destroy tanks and other armored vehicles. 
        These mines are typically buried or camouflaged to remain undetected until triggered by the weight of a vehicle. 
        
        Tank mines are used in defensive operations to protect strategic locations and slow enemy advances. 
        Modern tank mines may include advanced features such as anti-handling devices and programmable fuses, 
        making them more effective and difficult to disarm.
      `}
    />
  );
}