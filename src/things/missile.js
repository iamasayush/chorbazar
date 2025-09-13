import React from "react";
import ItemPage from "../component/ItemPage";

export default function Missile() {
  return (
    <ItemPage
      description={`
        A missile is a guided weapon designed to deliver an explosive payload to a specific target. 
        Missiles are equipped with advanced navigation systems, allowing them to adjust their trajectory mid-flight for greater accuracy. 
        They come in various types, including surface-to-air, air-to-surface, and intercontinental ballistic missiles (ICBMs). 
        
        Modern missiles are used for a wide range of military applications, from air defense to strategic deterrence. 
        Their precision and destructive power make them a key component of modern warfare and defense systems.
      `}
    />
  );
}