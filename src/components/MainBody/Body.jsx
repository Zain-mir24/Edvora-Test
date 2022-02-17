import React from "react";
import "./Body.css";
import Card from "../Card/Card";
import { Nearestpath } from "../../utils/data";
function Body() {
  console.log(Nearestpath());
  return (
    <div className="mainBackground">
      <span className="spanElement">Nearest Rides</span>{" "}
      <span className="spanElement">Upcoming Rides</span>{" "}
      <span className="spanElement">Past rides Rides</span>
      <span className="spanElement">Past rides Ride</span>
      {Nearestpath().map((i) => {
        
        return <Card Rideid={i.object.id} path={i.object.station_path} origin={i.object.origin_station_code} distance={i.distance} />;
      })}
    </div>
  );
}

export default Body;
