import React from "react";
import ItemPage from "../component/ItemPage";

export default function Pistol() {
  return (
    <ItemPage
      description={`
        A pistol is a small, handheld firearm designed for self-defense, law enforcement, and military use. 
        Pistols are easy to carry and operate, making them a popular choice for personal protection. 
        They come in various types, including semi-automatic pistols and revolvers, 
        each with unique features and advantages. 
        
        Modern pistols are equipped with advanced safety mechanisms and ergonomic designs, 
        ensuring reliability and ease of use in critical situations. 
        Their compact size and versatility make them an essential tool for security and defense.
      `}
    />
  );
}