import { useState } from "react";
import ConfirmLocationPage from "../components/pages/ConfirmLocationPage";
import SelectLocationPage from "../components/pages/SelectLocationPage";
import useAppSession from "../hooks/useAppSession";
import FullPageLoader from "../components/FullPageLoader";
import { useRouter } from "next/router";

export default function SelectLocation() {
  const [location, setLocation] = useState(null);
  const [step, setStep] = useState(0);
  const { loading, registrationStarted } = useAppSession();
  const router = useRouter();

  if (loading) return <FullPageLoader />;
  if (registrationStarted)
    return step ? (
      <ConfirmLocationPage setStep={setStep} location={location} />
    ) : (
      <SelectLocationPage setStep={setStep} setLocation={setLocation} />
    );
  else router.replace("/");
  return null;
}
