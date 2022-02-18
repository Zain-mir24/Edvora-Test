import React from "react";
import "./Card.css";
function Card(props) {
  var date1 = new Date(props.date).toString();
  var newArray = [];
  props.path.map((i) => {
    newArray.push(i, ",");
  });

  return (
    <div className="cardmain row">
      <div className="col-lg-4 " style={{ textAlign: "center" }}>
        <img className="cardImage" src={"./map.png"} />
      </div>
      <div className="col-lg-8 contentRight">
        Ride id : {props.Rideid} <br />
        Origin Station : {props.origin} <br />
        station_path : [{newArray}] <br />
        Date : {date1} <br />
        Distance:{props.distance}
        <div
          style={{
            textAlign: "right",
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
          <span className="spanText">{props.state}</span>
          <span className="spanText">{props.city}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
