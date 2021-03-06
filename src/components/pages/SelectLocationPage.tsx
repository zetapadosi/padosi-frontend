import React, { useEffect, useState } from "react";
import usePlaces from "../../hooks/usePlaces";
import Button from "../../components/Button";
import Input from "../../components/Input";
import TextLogo from "../../components/TextLogo";
import MessageBox from "../MessageBox";
import { signOut } from "next-auth/client";

function SelectLocationPage({ setLocation, setStep }) {
  const [doesBrowserSupportGeolocation, setDoesBrowserSupportGeolocation] = useState(false);
  const [address, setAddress] = useState("");
  const [showMessageBox, setShowMessageBox] = useState(false);
  const { inputref, getGeocoder } = usePlaces();

  const geoSuccess = async function (position: {
    coords: { latitude: number; longitude: number };
  }) {
    const pos = { lat: position.coords.latitude, lng: position.coords.longitude };
    const geo = await getGeocoder();
    const res = await geo({ location: pos });
    console.log(res);

    setAddress(res.results[0].formatted_address);
  };

  useEffect(() => {
    if (navigator.geolocation) setDoesBrowserSupportGeolocation(true);
  }, []);

  return (
    <>
      <nav className="grid grid-cols-3 py-2 px-4 items-center bg-white shadow-sm">
        <Button
          primary
          pill
          styles="justify-self-start px-3 py-1 md:px-5"
          onClick={async () => {
            localStorage.removeItem("padosiEmail");
            localStorage.removeItem("userFrom");
            await signOut();
          }}
        >
          Cancel
        </Button>
        <div className="col-start-2 text-center">
          <TextLogo lg />
        </div>
        <Button
          primary
          pill
          styles="justify-self-end px-3 py-1 md:px-5"
          onClick={async () => {
            if (inputref.current.value) {
              const address = inputref.current.value;
              const geo = await getGeocoder();
              const res = await geo({ address });
              // console.log(inputref.current.value);
              // console.log(res);
              const latitude = res.results[0].geometry.location.lat();
              const longitude = res.results[0].geometry.location.lng();

              setLocation({ latitude, longitude });

              setStep(1);
            } else setShowMessageBox(true);
          }}
        >
          Next
        </Button>
      </nav>
      <section className="container mx-auto max-w-5xl flex-grow flex flex-col gap-5 p-6 lg:p-8">
        <h2 className="font-bold text-lg leading-none">Select Location</h2>
        {showMessageBox && <MessageBox type="error">Please select a valid location</MessageBox>}
        <Input
          ref={inputref}
          placeholder="Area or Apt. name"
          onClick={() => setShowMessageBox(false)}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {doesBrowserSupportGeolocation && (
          <Button
            primary
            styles="max-w-5xl"
            onClick={() => {
              navigator.geolocation.getCurrentPosition(geoSuccess);
              setShowMessageBox(false);
            }}
          >
            Auto-Detect Location
          </Button>
        )}
      </section>
      <footer className="fixed bottom-0 w-full text-center py-3 text-primary">Padosi ?? 2021</footer>
    </>
  );
}

export default SelectLocationPage;
