import React, { useState } from "react";
import "./Body.css";
import Card from "../Card/Card";
import { Nearestpath } from "../../utils/data";
import { Past } from "../../utils/past";
import { UpComing } from "../../utils/future";
function Body() {
  const [content, setContent] = useState("");
  return (
    <div className="mainBackground">
      <span
        className="spanElement"
        onClick={() => {
          setContent("NearestPath");
        }}
      >
        Nearest Rides
      </span>{" "}
      <span
        className="spanElement"
        onClick={() => {
          setContent("UpcomingRides");
        }}
      >
        Upcoming Rides
      </span>{" "}
      <span
        className="spanElement"
        onClick={() => {
          setContent("PastRides");
        }}
      >
        Past rides Rides
      </span>
      <span className="spanElement">filters</span>
      <div>
        {content == "NearestPath" &&
          Nearestpath().map((i) => {
            return (
              <Card
                Rideid={i.object.id}
                date={i.object.date}
                state={i.object.state}
                city={i.object.city}
                path={i.object.station_path}
                origin={i.object.origin_station_code}
                distance={i.distance}
              />
            );
          })}
        {content == "UpcomingRides" &&
          UpComing().map((i) => {
            return UpComing.length == 0 ? (
            <div>
   <h1 style={{color:"white"}}>
     No rides in upcoming dates
   </h1>
              </div>
            ) : (
              <Card
                Rideid={i.id}
                date={i.date}
                state={i.state}
                city={i.city}
                path={i.station_path}
                origin={i.origin_station_code}
                distance={i.distance}
              />
            );
          })}
        {content == "PastRides" &&
          Past().map((i) => {
            return (
              <Card
                Rideid={i.id}
                date={i.date}
                state={i.state}
                city={i.city}
                path={i.station_path}
                origin={i.origin_station_code}
                distance={i.distance}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Body;
