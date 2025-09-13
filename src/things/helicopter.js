import ItemPage from "../component/ItemPage";

export default function Helicopter() {
  return (
    <ItemPage 
      description={`
        A helicopter is a type of aircraft that uses rotating blades to generate lift and propulsion. 
        Unlike fixed-wing airplanes, helicopters can take off and land vertically, hover in place, and maneuver in tight spaces. 
        These capabilities make helicopters ideal for a wide range of applications, including search and rescue, 
        medical evacuation, military operations, and aerial photography. 
        
        Modern helicopters are equipped with advanced avionics, powerful engines, and versatile payload options, 
        allowing them to perform in diverse environments and missions. 
        From transporting troops to delivering humanitarian aid, helicopters play a vital role in both civilian and military aviation.
      `}
    />
  );
}