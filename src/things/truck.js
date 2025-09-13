import React from "react";
import ItemPage from "../component/ItemPage";

export default function Truck() {
  return (
    <ItemPage
      description={`
        A truck is a motor vehicle designed to transport cargo. 
        Trucks come in various sizes and configurations, from small pickups to large commercial vehicles. 
        They are essential for logistics, construction, and other industries, providing a reliable means of moving goods and materials. 
        
        Modern trucks are equipped with advanced technology, including fuel-efficient engines, safety features, and telematics systems, 
        ensuring efficiency and safety in operations. 
        Trucks play a critical role in the global economy, connecting producers and consumers across vast distances.
      `}
    />
  );
}