import FORTDATA from "./../../data/FortData";
import { useParams } from "react-router-dom";
import "./FortView.css";

function FortView() {
  const { id } = useParams();
  const fort = FORTDATA.find((fort) => fort.id === id);

  if (!fort) {
    return <h2>Fort not found</h2>;
  }

  const {
    name,
    fortImage,
    fortAddress,
    fortTiming,
    fortDescription,
    fortBlog,
  } = fort;

  return (
    <div className="fort-view-container">
      <h1 className="fort-view-title">{name}</h1>
      <img src={fortImage} alt={`${name} Image`} className="fort-view-image" />
      <p style={{ fontWeight: "500" }}>Address : {fortAddress}</p>
      <p style={{ fontWeight: "500" }}>Timing : {fortTiming}</p>
      <p style={{ color: "orangered", fontWeight: "500" }}>{fortDescription}</p>
      <iframe
        width="100%"
        height="315"
        src={fortBlog}
        title={name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default FortView;
