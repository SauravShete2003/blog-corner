import FortCard from "../../components/Forts/Forts";
import FORTDATA from "../../data/FortData";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Forts of Maharashtra</h1>
      <div className="fort-cards-container">
        {FORTDATA.map((fort) => {
          const { id, name, fortImage, fortAddress, fortTiming, fortDescription } = fort;
          return (
            <FortCard
              key={id}  
              id={id}
              name={name}
              fortImage={fortImage}
              fortAddress={fortAddress}
              fortTiming={fortTiming}
              fortDescription={fortDescription}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
