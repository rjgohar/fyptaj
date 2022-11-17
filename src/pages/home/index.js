import React from "react";
import MapCard from "../../components/cards/mapCards";
import Homehead from "../../components/homeheadsection";
import Location from "../../components/Location";
import CardServicesHome from "../../components/servicesHomeSec";

export default function Home() {
  return (
    <div>
      <Homehead />
      <MapCard />
      <CardServicesHome />
      <Location />
    </div>
  );
}
