import { useEffect, useRef } from "react";
import getService from "../utils/initMaps";

export default function useMaps(location: { latitude: number; longitude: number }) {
  const mapref = useRef(null);
  const latLngRef = useRef(null);
  const center = { lat: location?.latitude, lng: location?.longitude };
  useEffect(() => {
    (async () => {
      const mapDiv = mapref.current as HTMLElement;
      const { map, marker } = (await getService("map", mapDiv, center)) as {
        map: google.maps.Map;
        marker: google.maps.Marker;
      };
      latLngRef.current = map.getCenter();
      map.addListener("click", (e) => {
        marker.setPosition(e.latLng);
        latLngRef.current = e.latLng;
      });
    })();
  }, []);

  return { mapref, latLngRef };
}
