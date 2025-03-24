import { useRef } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useInView } from "framer-motion";

const center = {
  lat: -33.8688,
  lng: 151.2093,
};

const mapStyles = {
  height: "400px",
  width: "100%",
  maxWidth: "100vw",
};

export default function Map() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={15}
          center={center}
          options={{
            styles: [
              {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{ color: "#000000" }],
              },
            ],
            scrollwheel: false,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
