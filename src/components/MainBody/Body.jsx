import React, { useState } from "react";
import "./Body.css";
import Card from "../Card/Card";
import { Nearestpath } from "../../utils/data";
import { Past } from "../../utils/past";
import { UpComing } from "../../utils/future";
function Body() {
  var emptybool = Boolean;
  UpComing().length == 0 ? (emptybool = true) : (emptybool = false);
  const [content, setContent] = useState("");
  return (
    <div className="mainBackground">
      <div className="row">
      <div
        className="col-lg-3 spanElement"
        onClick={() => {
          setContent("NearestPath");
        }}
      >
        Nearest Rides
      </div>{" "}
      <div
        className=" col-lg-3  spanElement"
        onClick={() => {
          setContent("UpcomingRides");
        }}
      >
        Upcoming Rides
      </div>{" "}
      <div
        className=" col-lg-3 spanElement"
        onClick={() => {
          setContent("PastRides");
        }}
      >
        Past rides Rides
      </div>
      
      </div>
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
          emptybool ? (
            <div>
              <h1 style={{color:"white"}}>No rides</h1>
            </div>
          ) : (
            UpComing().map((i) => {
           
              <Card
                Rideid={i.id}
                date={i.date}
                state={i.state}
                city={i.city}
                path={i.station_path}
                origin={i.origin_station_code}
                distance={i.distance}
              />
            
          })
          )

         
        }

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
