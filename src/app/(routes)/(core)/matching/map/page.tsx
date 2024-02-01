import React from "react";
import MapWrapper from "@/components/map/MapWrapper";
import { roboto } from "@/atoms/fonts";

const MapPage = () => (
  <section className="mx-2">
    <h2
      className={`my-1 border-b border-custom-divider-gray p-2 text-center text-lg font-medium text-custom-white lg:me-4 lg:p-4 lg:text-2xl ${roboto.className}`}
    >
      Map
    </h2>
    <div className="">
      <MapWrapper />
    </div>
  </section>
);

export default MapPage;
