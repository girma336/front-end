"use client";

import React from "react";
import { matchesDetails } from "@/data/MapData";
import MapContainer from "./MapContainer";
import MapLegend from "./MapLegend";

const MapWrapper = () => (
  <div className="relative h-full w-full p-2">
    <MapLegend />
    <MapContainer matchedUsers={matchesDetails} />
  </div>
);

export default MapWrapper;
