import { useSelector } from "react-redux";
function Pillar() {
  const cardName = useSelector((state) => state.card.pillarValues);

  return (
    <div>
      <h1> Welcome To {cardName && cardName.name} </h1>
    </div>
  );
}

export default Pillar;
