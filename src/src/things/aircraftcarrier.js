import ItemPage from "../component/ItemPage";

export default function AircraftCarrier() {
  return (
    <ItemPage 
      description={`
        An aircraft carrier is a large and powerful warship that functions as a mobile airbase at sea. 
        It is specifically designed to deploy, recover, and support aircraft operations without needing a local airfield. 
        The most prominent feature of an aircraft carrier is its flat flight deck, where aircraft can take off and land. 
        Below the deck, there is a hangar bay used for storing and maintaining the aircraft. 
        Modern carriers are equipped with advanced systems such as catapults for launching jets, 
        arresting wires to stop them during landing, and radar and missile defense systems for protection. 
        These ships play a critical role in modern naval strategy, allowing countries to project air power globally, 
        support ground operations, and respond rapidly to conflicts or disasters. Some aircraft carriers, 
        like those operated by the United States, are nuclear-powered, giving them the ability to operate for decades without refueling. 
        Overall, aircraft carriers are essential assets in maintaining military presence and readiness across the world’s oceans.
      `}
    />
  );
}
