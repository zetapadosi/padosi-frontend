import { useState } from "react";
import ConfirmLocationPage from "../components/pages/ConfirmLocationPage";
import SelectLocationPage from "../components/pages/SelectLocationPage";

export default function SelectLocation() {
  const [location, setLocation] = useState(null);
  const [step, setStep] = useState(0);
  return step ? (
    <ConfirmLocationPage setStep={setStep} location={location} />
  ) : (
    <SelectLocationPage setStep={setStep} setLocation={setLocation} />
  );
}
