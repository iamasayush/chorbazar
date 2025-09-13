import React from "react";
import ItemPage from "../component/ItemPage";

export default function Nuke() {
  return (
    <ItemPage
      description={`
        A nuke, or nuclear weapon, is a device that releases energy through nuclear reactions, 
        either fission or a combination of fission and fusion. 
        These weapons are capable of causing massive destruction and loss of life, 
        making them the most powerful weapons ever created. 
        
        Nukes are primarily used as deterrents in modern warfare, with their devastating potential 
        serving as a means to prevent conflicts. 
        Their development and use have shaped global politics and security strategies since their inception during World War II.
      `}
    />
  );
}