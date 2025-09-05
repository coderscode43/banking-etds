import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/component/ErrorPage";
import HomeSClayout from "./layouts/HomeSCLayout";
import Homepage from "./pages/SC/Homepage";
import Branch from "./pages/SC/Branch";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Navigate to={"/home/homepage"} replace />} />
        <Route
          path="home"
          element={<HomeSClayout />}
          errorElement={<ErrorPage />}
        >
          <Route path="homepage" element={<Homepage />} />
          <Route path="branch" element={<Branch />} />
        </Route>

        {/* Catch-all route for 404s */}
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
