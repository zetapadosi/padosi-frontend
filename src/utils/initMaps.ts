import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  // apiKey: "AIzaSyB_63lMtu1VsznorMRnsixvDod9KoHW6NQ",
  apiKey: "AIzaSyBwv2lV2yYVRRDh1xQg1IRqv1WZOVl5M4g",
  version: "weekly",
  libraries: ["places"],
});

const options = {
  componentRestrictions: { country: "in" },
} as google.maps.places.AutocompleteOptions;

export default async function getService(
  serviceName: ServiceName,
  element?: HTMLElement,
  center?: google.maps.LatLng | google.maps.LatLngLiteral
) {
  await loader.load();
  switch (serviceName) {
    case "autocomplete":
      return new google.maps.places.Autocomplete(element as HTMLInputElement, options);

    case "geocoder":
      return new google.maps.Geocoder();

    case "map":
      const map = new google.maps.Map(element, {
        center,
        zoom: 15,
        disableDefaultUI: true,
        zoomControl: true,
      });
      const marker = new google.maps.Marker({
        position: map.getCenter(),
        map,
        title: "Home",
      });
      return { map, marker };

    default:
      console.log("invalid service name");
      break;
  }
}

type ServiceName = "autocomplete" | "geocoder" | "map";