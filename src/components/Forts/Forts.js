import "./Forts.css";
import { Link } from "react-router-dom";

function FortCard({ id, name, fortImage, fortAddress, fortTiming, fortDescription }) {
  return (
    <Link to={`/forts/${id}`} className="fort-card">
      <img src={fortImage} alt={`${name} Image`} />
      <h2>{name}</h2>
      <p>{fortAddress}</p>
      <p>{fortTiming}</p>
      <p>{fortDescription.substring(0 , 100)}...</p>
    </Link>
  );
}

export default FortCard;
