import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-img">
        <img src={props.image} alt="image" />
      </div>
      <h4 className="">{props.heading}</h4>
      <p className="">{props.text}</p>
    </div>
  );
}

export default TripData;
