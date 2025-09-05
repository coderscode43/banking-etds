import HomeSCSidebar from "@/components/navigation/HomeSCSidebar";
import HomeSCTopBar from "@/components/navigation/HomeSCTopBar";
import { Outlet } from "react-router-dom";

const HomeSClayout = () => {
  return (
    <>
      <HomeSCTopBar />
      <HomeSCSidebar />
      <main className="mx-10 my-5 ms-[104px]">
        <Outlet />
      </main>
    </>
  );
};

export default HomeSClayout;
