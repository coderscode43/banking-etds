import HomeSCTopBar from "@/components/navigation/HomeSCTopBar";
import { Outlet } from "react-router-dom";

const HomeSClayout = () => {
  return (
    <>
      <HomeSCTopBar />
      <main className="mx-10 my-5">
        <Outlet />
      </main>
    </>
  );
};

export default HomeSClayout;
