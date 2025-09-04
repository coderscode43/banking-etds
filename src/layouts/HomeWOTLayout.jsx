import { Outlet } from "react-router-dom";
import HomeWOTTopBar from "@/components/navigation/HomeWOTTopBar";

const HomeWOTLayout = () => {
  return (
    <>
      <HomeWOTTopBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomeWOTLayout;
