import React from "react";
import Topsellers from "../../components/famers/farmer";

import MapCardFarmer from "../../components/farmerSection";

export default function Farmer() {
  return (
    <div style={{ paddingTop: "90px" }}>
      <Topsellers />
      <MapCardFarmer />
    </div>
  );
}
