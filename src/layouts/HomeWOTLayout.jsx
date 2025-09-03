import { Outlet } from "react-router-dom";

const HomeWOTLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomeWOTLayout;
