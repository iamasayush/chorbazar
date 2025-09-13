import React from "react";
import ItemPage from "../component/ItemPage";

export default function Yacht() {
  return (
    <ItemPage
      description={`
        A yacht is a luxury boat designed for recreation and leisure. 
        Yachts are equipped with high-end amenities, including spacious cabins, gourmet kitchens, and entertainment systems, 
        providing a premium experience for their owners and guests. 
        
        Yachts come in various sizes and styles, from sleek motor yachts to elegant sailing yachts. 
        They are often used for cruising, hosting parties, and exploring exotic destinations, 
        offering a unique blend of comfort and adventure on the water.
      `}
    />
  );
}