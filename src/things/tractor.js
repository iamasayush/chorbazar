import React from "react";
import ItemPage from "../component/ItemPage";

export default function Tractor() {
  return (
    <ItemPage
      description={`
        A tractor is a powerful vehicle designed for agricultural and industrial tasks. 
        Tractors are equipped with large rear wheels and a robust engine, making them ideal for plowing, tilling, and hauling heavy loads. 
        
        Modern tractors come with advanced features such as GPS navigation, automated controls, and specialized attachments, 
        enhancing their efficiency and versatility. 
        Tractors play a vital role in farming, construction, and other industries, contributing to productivity and sustainability.
      `}
    />
  );
}