import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";

function RootLayout() {
  const submit = useSubmit();
  const token = useLoaderData();
  // const navigation = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }
    setTimeout(() => {
      submit(null, { action: "/logout", method: "POST" });
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
