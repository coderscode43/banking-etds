import HomeSCTopbar from "@/components/navigation/HomeSCTopbar";
import { Outlet } from "react-router-dom";

const HomeSClayout = () => {
  return (
    <>
      <HomeSCTopbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomeSClayout;
