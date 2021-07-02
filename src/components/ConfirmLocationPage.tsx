import Link from "next/link";
import useMaps from "../hooks/useMaps";
import Button from "../components/Button";
import TextLogo from "../components/TextLogo";
import { useRouter } from "next/router";

function ConfirmLocationPage({ location, setStep }) {
  const { mapref, latLngRef } = useMaps(location);
  const router = useRouter();
  return (
    <div className="h-full flex flex-col">
      <nav className="grid grid-cols-3 py-2 px-4 items-center bg-white shadow-sm">
        <Link href="/select-location">
          <a className="justify-self-start">
            <Button primary pill styles="px-3 py-1 md:px-5 md:py-1" onClick={() => setStep(0)}>
              Back
            </Button>
          </a>
        </Link>
        <div className="col-start-2 text-center">
          <TextLogo lg />
        </div>
        <Button
          onClick={() => {
            console.log(latLngRef.current.lat(), latLngRef.current.lng());
            router.push("/home");
          }}
          primary
          pill
          styles="justify-self-end px-3 py-1 md:px-5 md:py-1"
        >
          Done
        </Button>
      </nav>
      <section className="container mx-auto max-w-5xl flex-grow flex flex-col gap-5 p-6 lg:p-8">
        <h2 className="font-bold text-lg leading-none">Confirm Location</h2>
        <span className="text-gray-400 text-sm leading-none">
          Click on the map to choose the precise location
        </span>
        <div ref={mapref} className="h-full w-full max-h-[80%] max-w-5xl" />
      </section>
      <footer className="text-center py-3 text-primary">Padosi © 2021</footer>
    </div>
  );
}

export default ConfirmLocationPage;
