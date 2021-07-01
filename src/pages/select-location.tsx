import { useState } from "react";
import ConfirmLocationPage from "../components/ConfirmLocationPage";
import SelectLocationPage from "../components/SelectLocationPage";

export default function SelectLocation() {
  const [location, setLocation] = useState(null);
  const [step, setStep] = useState(0);
  return step ? (
    <ConfirmLocationPage location={location} />
  ) : (
    <SelectLocationPage setStep={setStep} setLocation={setLocation} />
  );
}
