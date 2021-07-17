import FullPageLoader from "../../components/FullPageLoader";
import EditBioPage from "../../components/pages/EditBioPage";

import useAppSession from "../../hooks/useAppSession";

export default function Bio() {
  const { loading, isLoggedIn } = useAppSession();

  if (isLoggedIn) return <EditBioPage />;
  if (loading) return <FullPageLoader />;
  return null;
}
