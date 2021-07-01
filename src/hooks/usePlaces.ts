import { useEffect, useRef } from "react";
import getService from "../utils/initMaps";

export default function usePlaces() {
  const inputref = useRef(null);
  useEffect(() => {
    (async () => {
      const input = inputref.current as HTMLInputElement;
      await getService("autocomplete", input);
    })();
  }, []);

  async function getGeocoder() {
    const geocoder = (await getService("geocoder")) as google.maps.Geocoder;
    return geocoder.geocode as geocodeFunction;
  }

  return { inputref, getGeocoder };
}

type geocodeFunction = (
  request: google.maps.GeocoderRequest,
  callback?: (a: google.maps.GeocoderResult[], b: google.maps.GeocoderStatus) => void
) => Promise<google.maps.GeocoderResponse>;
