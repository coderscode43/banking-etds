import HomeSCTopBar from "@/components/navigation/HomeSCTopBar";
import { Outlet } from "react-router-dom";

const HomeSClayout = () => {
  return (
    <>
      <HomeSCTopBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomeSClayout;
