import { useState } from "react";
import ConfirmLocationPage from "../components/pages/ConfirmLocationPage";
import SelectLocationPage from "../components/pages/SelectLocationPage";
import useAppSession from "../hooks/useAppSession";
import FullPageLoader from "../components/FullPageLoader";

export default function SelectLocation() {
  const [location, setLocation] = useState(null);
  const [step, setStep] = useState(0);
  const { loading } = useAppSession();

  if (loading) return <FullPageLoader />;

  return step ? (
    <ConfirmLocationPage setStep={setStep} location={location} />
  ) : (
    <SelectLocationPage setStep={setStep} setLocation={setLocation} />
  );
}
