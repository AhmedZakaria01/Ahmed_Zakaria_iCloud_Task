import HomeCard from "../HomeCards/HomeCard";
import styles from "./Home.module.css";
function Home() {
  return (
    <section>
      <div className={styles.layer}></div>
      <div>
        <div className="w-[100%] flex justify-between mx-auto px-5 mb-5">
          <div className="text-xl text-blue-500"> Get Supported </div>
          <div>
            <i className="fa-solid fa-tornado text-white"></i>
          </div>
        </div>

        <div className="w-full mx-auto ">
          <HomeCard />
        </div>
      </div>
    </section>
  );
}

export default Home;
