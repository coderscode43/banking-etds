import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/component/ErrorPage";
import HomeSClayout from "./layouts/HomeSCLayout";
import Branch from "./pages/SC/Branch";
import CorrectionRequest from "./pages/SC/CorrectionRequest";
import DeductorDetails from "./pages/SC/DeductorDetails";
import Homepage from "./pages/SC/Homepage";
import Ldc from "./pages/SC/Ldc";
import Logs from "./pages/SC/Logs";
import RegularReturn from "./pages/SC/RegularReturn";
import UploadCertificate from "./pages/SC/UploadCertificate";
import UserDetails from "./pages/SC/UserDetails";
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
          <Route path="deductorDetails" element={<DeductorDetails />} />
          <Route path="correctionRequest" element={<CorrectionRequest />} />
          <Route path="regularReturn" element={<RegularReturn />} />
          <Route path="uploadCertificate" element={<UploadCertificate />} />
          <Route path="ldc" element={<Ldc />} />
          <Route path="userDetails" element={<UserDetails />} />
          <Route path="logs" element={<Logs />} />
        </Route>

        {/* Catch-all route for 404s */}
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
