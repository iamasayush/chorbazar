import React from "react";
import ItemPage from "../component/ItemPage";

export default function RPG() {
  return (
    <ItemPage 
      description={`
        An RPG, or rocket-propelled grenade, is a portable, shoulder-fired weapon system designed to launch explosive projectiles. 
        RPGs are widely used in military operations for their simplicity, effectiveness, and versatility. 
        They are capable of engaging a variety of targets, including armored vehicles, fortifications, and personnel. 
        
        The RPG's lightweight design and ease of use make it a valuable asset in both conventional and guerrilla warfare. 
        Its iconic status and widespread use have made it one of the most recognizable weapons in modern combat.
      `}
    />
  );
}
