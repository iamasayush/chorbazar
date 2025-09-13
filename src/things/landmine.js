import ItemPage from "../component/ItemPage";

export default function Landmine() {
  return (
    <ItemPage 
      description={`
        A landmine is an explosive device placed on or just under the ground, designed to detonate when triggered by pressure, proximity, or a tripwire. 
        Landmines are commonly used in military operations to deny access to certain areas or to protect strategic positions. 
        
        There are two main types of landmines: anti-personnel mines, which target individuals, and anti-tank mines, which are designed to disable vehicles. 
        While effective in combat, landmines pose significant risks to civilians and remain a major concern in post-conflict regions. 
        Efforts to clear landmines and ban their use have been ongoing through international treaties and humanitarian initiatives.
      `}
    />
  );
}