import FORTDATA from './../../data/FortData';
import { useParams } from 'react-router-dom';
import './FortView.css';

function FortView() {
  const { id } = useParams();
  const fort = FORTDATA.find((fort) => fort.id === id);

  if (!fort) {
    return <h2>Fort not found</h2>;
  }

  const { name, fortImage, fortAddress, fortTiming, fortDescription } = fort;

  return (
    <div className="fort-view-container">
      <h1 className="fort-view-title">{name}</h1>
      <img src={fortImage} alt={`${name} Image`} />
      <p>{fortAddress}</p>
      <p>{fortTiming}</p>
      <p>{fortDescription}</p>
    </div>
  );
}

export default FortView;
