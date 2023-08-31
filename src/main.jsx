import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import store from "./store";
import { Provider } from "react-redux";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import App from "./App.jsx";
import DefaultLayout from "./DefaultLayout.jsx";
import AuthApp from "./AuthApp.jsx";
import CreateChildProfileScreen from "./screens/child-profile/CreateChildProfileScreen";
import ViewChildProfileScreen from "./screens/child-profile/ViewChildProfileScreen";
import ViewDashboardScreen from "./screens/Others/ViewDashboardScreen";
import ViewStaffScreen from "./screens/Staff/ViewStaffScreen";
import ViewSocialWorkerScreen from "./screens/External-Party/ViewSocialWorkerScreen";
import ViewParentScreen from "./screens/External-Party/ViewParentScreen";
import ViewChildDocumentScreen from "./screens/child-profile/ViewChildDocumentScreen";
import ViewStaffDocumentScreen from "./screens/Staff/ViewStaffDocumentScreen";
import ViewSocialWorkerDocumentScreen from "./screens/External-Party/ViewSocialWorkerDocumentScreen";
import ViewParentDocumentScreen from "./screens/External-Party/ViewParentDocumentScreen";
import ViewOngingCases from "./screens/Cases/ViewOngingCases";
import ViewPendingCases from "./screens/Cases/ViewPendingCases";
import ViewChildReportScreen from "./screens/child-profile/ViewChildReportScreen";
import ViewFinancialReportScreen from "./screens/others/ViewFinancialReportScreen";
import ViewStaffReportScreen from "./screens/staff/ViewStaffReportScreen";
import ViewExternalPartyReportScreen from "./screens/external-party/ViewExternalPartyREportScreen";
import CreateStaffScreen from "./screens/Staff/CreateStaffScreen";
import CreateSocialWorkerScreen from "./screens/External-Party/CreateSocialWorkerScreen";
import ViewUserRolesScreen from "./screens/Others/ViewUserRolesScreen";
import CreateParentScreen from "./screens/External-Party/CreateParentScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<HomeScreen />} />
        <Route index={true} path="/home" element={<HomeScreen />} />
        <Route path="/dashboard" element={<ViewDashboardScreen />} />
        <Route path="/monitoring/viewStaff" element={<ViewStaffScreen />} />
        <Route
          path="/monitoring/viewSocialWorker"
          element={<ViewSocialWorkerScreen />}
        />
        <Route path="/monitoring/viewParent" element={<ViewParentScreen />} />
        <Route
          path="/profile/createProfile"
          element={<CreateChildProfileScreen />}
        />
        <Route
          path="/profile/viewProfile"
          element={<ViewChildProfileScreen />}
        />
        <Route
          path="/legal/viewChildDocument"
          element={<ViewChildDocumentScreen />}
        />
        <Route
          path="/legal/viewStaffDocument"
          element={<ViewStaffDocumentScreen />}
        />
        <Route
          path="/legal/viewSocialWorkerDocument"
          element={<ViewSocialWorkerDocumentScreen />}
        />
        <Route
          path="/legal/viewParentDocument"
          element={<ViewParentDocumentScreen />}
        />
        <Route path="/cases/viewOngoingCases" element={<ViewOngingCases />} />
        <Route path="/cases/viewPendingCases" element={<ViewPendingCases />} />
        <Route
          path="/report/viewChildReport"
          element={<ViewChildReportScreen />}
        />
        <Route
          path="/report/viewFinancialReport"
          element={<ViewFinancialReportScreen />}
        />
        <Route
          path="/report/viewStaffReport"
          element={<ViewStaffReportScreen />}
        />
        <Route
          path="/report/viewExternalPartyReport"
          element={<ViewExternalPartyReportScreen />}
        />
        <Route path="/userRole/createStaff" element={<CreateStaffScreen />} />
        <Route path="/userRole/createParent" element={<CreateParentScreen />} />
        <Route
          path="/userRole/createSocialWorker"
          element={<CreateSocialWorkerScreen />}
        />
        <Route
          path="/userRole/viewUserRole"
          element={<ViewUserRolesScreen />}
        />
      </Route>
      <Route element={<AuthApp />}>
        <Route path="/auth/login" element={<LoginScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
