import React from "react";
import ItemPage from "../component/ItemPage";

export default function Sniper() {
  return (
    <ItemPage
      description={`
        A sniper rifle is a high-precision, long-range firearm designed for accuracy and stealth. 
        Used by military and law enforcement snipers, these rifles are equipped with advanced optics, 
        adjustable stocks, and specialized ammunition to ensure precise targeting. 
        
        Sniper rifles play a critical role in modern warfare, providing support for reconnaissance, 
        counter-sniper operations, and the elimination of high-value targets. 
        Their effectiveness lies in the skill of the operator and the quality of the weapon, 
        making them a symbol of precision and expertise in marksmanship.
      `}
    />
  );
}