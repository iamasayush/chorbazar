import React from "react";
import ItemPage from "../component/ItemPage";

export default function Shotgun() {
  return (
    <ItemPage
      description={`
        A shotgun is a firearm designed to fire a spread of shot, making it highly effective at close range. 
        Commonly used for hunting, sport shooting, and home defense, shotguns are versatile weapons that come in various types, 
        including pump-action, semi-automatic, and double-barrel models. 
        
        Shotguns are valued for their stopping power and ease of use, making them a popular choice for both civilian and military applications. 
        Their ability to fire a wide pattern of projectiles increases the likelihood of hitting a target, 
        making them ideal for dynamic and fast-paced scenarios.
      `}
    />
  );
}