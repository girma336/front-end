"use client";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const mapBoxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
if (mapBoxToken) mapboxgl.accessToken = mapBoxToken;

// TODO have to discuss if user's location should be used here
const mapCenter: any = [-0.10645187960855651, 51.50616867586183];

interface MapContainerProps {
  matchedUsers?: any;
}

const MapContainer = ({ matchedUsers }: MapContainerProps) => {
  const mapContainer = useRef(null);
  const map: any | null = useRef(null);

  useEffect(() => {
    // initialize map only once
    if (map.current) return;
    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
        center: mapCenter,
        zoom: 1,
        renderWorldCopies: false,
        attributionControl: false,
      });

      map.current.addControl(
        new mapboxgl.AttributionControl({ compact: true })
      );

      map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");

      matchedUsers.forEach((user: any) => {
        // custom map popup div
        const popupDiv = document.createElement("div");
        popupDiv.classList.add("map-popup");
        popupDiv.innerHTML = `
        <img src=${user.icon} alt="profile icon" class="map-popup-image" />
        <h2>${user.name}</h2>
        <h3>${user.profile}</h3>
        <a href=${user.profileLink}>Profile...</a>
        `;

        // create mapboxgl popup object using custom popup div
        const popup = new mapboxgl.Popup({
          offset: 25,
        }).setDOMContent(popupDiv);

        // create mapboxgl marker, attach popup and add to map
        new mapboxgl.Marker({
          color: user.skill.color,
        })
          .setLngLat([user.long, user.lat])
          .setPopup(popup)
          .addTo(map.current);
      });
    }
  });

  return (
    <div
      className="h-[450px] w-full rounded-lg md:h-[650px]"
      ref={mapContainer}
    />
  );
};

export default MapContainer;
