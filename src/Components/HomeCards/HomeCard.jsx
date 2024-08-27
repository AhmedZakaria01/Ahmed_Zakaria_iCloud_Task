import { useDispatch, useSelector } from "react-redux";
import img from "../../assets/Actionable Insights.png";
import { Link } from "react-router-dom";
import { setPillarValues } from "./../../Redux/HomeCardSlice";
function HomeCard() {
  const cardData = useSelector((state) => state.card.cardData);

  const dispatch = useDispatch();
  function getCardInfo(cardHeader) {
    dispatch(setPillarValues({ name: cardHeader }));
    console.log(cardHeader);
  }
  return (
    <>
      {/* Cards */}
      <div className="flex gap-5">
        {cardData.map((card, index) => (
          <Link
            key={index}
            onClick={() => getCardInfo(card.header)}
            className="no-underline"
            to={"/pillar"}
          >
            <div className="bg-white rounded-lg w-full p-2">
              <img src={img} className="w-100" alt="img" />
              <div
                className={`${card.bgColor} text-white p-2 rounded-lg flex flex-col justify-between`}
              >
                <div>
                  <p className="">{card.header}</p>
                  <p> {card.middle} </p>
                </div>
                <br />
                <div className="flex justify-between items-center">
                  <p> {card.footer} </p>
                  <p className="text-3xl hover:cursor-pointer"> + </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Home Footer */}
      <div className="flex justify-end gap-4 text-white pt-5">
        <p> Remaining DYSUs: 200 </p>
        <p> Concumed DYSUs: 350 </p>
      </div>
    </>
  );
}

export default HomeCard;
