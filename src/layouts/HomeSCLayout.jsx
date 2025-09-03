import { Outlet } from "react-router-dom";

const HomeSClayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomeSClayout;
