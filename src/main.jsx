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
import ViewDashboardScreen from "./screens/others/ViewDashboardScreen";
import ViewStaffScreen from "./screens/staff/ViewStaffScreen";
import ViewSocialWorkerScreen from "./screens/external-party/ViewSocialWorkerScreen";
import ViewParentScreen from "./screens/external-party/ViewParentScreen";
import ViewChildDocumentScreen from "./screens/child-profile/ViewChildDocumentScreen";
import ViewStaffDocumentScreen from "./screens/staff/ViewStaffDocumentScreen";
import ViewSocialWorkerDocumentScreen from "./screens/external-party/ViewSocialWorkerDocumentScreen";
import ViewParentDocumentScreen from "./screens/external-party/ViewParentDocumentScreen";
import ViewOngingCases from "./screens/cases/ViewOngingCases";
import ViewPendingCases from "./screens/cases/ViewPendingCases";
import ViewChildReportScreen from "./screens/child-profile/ViewChildReportScreen";
import ViewFinancialReportScreen from "./screens/others/ViewFinancialReportScreen";
import ViewStaffReportScreen from "./screens/staff/ViewStaffReportScreen";
import ViewExternalPartyReportScreen from "./screens/external-party/ViewExternalPartyReportScreen";
import CreateStaffScreen from "./screens/staff/CreateStaffScreen";
import CreateSocialWorkerScreen from "./screens/external-party/CreateSocialWorkerScreen";
import ViewUserRolesScreen from "./screens/others/ViewUserRolesScreen";
import CreateParentScreen from "./screens/external-party/CreateParentScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import ChildOverviewScreen from "./screens/child-profile/ChildOverviewScreen";
import ViewOverallSystemScreen from "./screens/others/ViewOverallSystemScreen";
import AssignSocialWorkersScreen from "./screens/cases/AssignSocialWorkersScreen";
import ReceiveFundScreen from "./screens/others/ReceiveFundScreen";
import StaffOverviewScreen from "./screens/staff/StaffOverviewScreen";
import ParentOverviewScreen from "./screens/external-party/ParentOverviewScreen";
import SocialWorkerOverviewScreen from "./screens/external-party/SocialWorkerOverviewScreen";
import AcceptRejectCasesScreen from "./screens/cases/AcceptRejectCasesScreen";
import CreateInquiryScreen from "./screens/others/CreateInquiryScreen";
import ExternalPartyApp from "./ExternalPartyApp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<App />}>
        <Route index={true} path="/" element={<HomeScreen />} />
        <Route index={true} path="/home" element={<HomeScreen />} />
        <Route path="/dashboard" element={<ViewDashboardScreen />} />
        <Route path="/monitoring/viewStaff" element={<ViewStaffScreen />} />
        <Route
          path="/monitoring/viewStaff/overview"
          element={<StaffOverviewScreen />}
        />
        <Route
          path="/monitoring/viewSocialWorker"
          element={<ViewSocialWorkerScreen />}
        />
        <Route
          path="/monitoring/viewSocialWorker/overview"
          element={<SocialWorkerOverviewScreen />}
        />
        <Route path="/monitoring/viewParent" element={<ViewParentScreen />} />
        <Route
          path="/monitoring/viewParent/overview"
          element={<ParentOverviewScreen />}
        />
        <Route
          path="/profile/createProfile"
          element={<CreateChildProfileScreen />}
        />
        <Route
          path="/profile/viewProfile"
          element={<ViewChildProfileScreen />}
        />
        <Route
          path="/profile/viewProfile/overview"
          element={<ChildOverviewScreen />}
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
        <Route
          path="/report/viewOverallSystemReport"
          element={<ViewOverallSystemScreen />}
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

        <Route
          path="/cases/AssignSocialWorkers"
          element={<AssignSocialWorkersScreen />}
        />

        <Route
          path="/cases/AcceptOrRejectCases"
          element={<AcceptRejectCasesScreen />}
        />
        <Route path="/funds/ReceiveFunds" element={<ReceiveFundScreen />} />
        <Route
          path="/inquiry/CreateInquiry"
          element={<CreateInquiryScreen />}
        />
      </Route>
      <Route element={<AuthApp />}>
        <Route path="/auth/login" element={<LoginScreen />} />
        <Route path="/auth/register" element={<RegistrationScreen />} />
      </Route>
      <Route element={<ExternalPartyApp />}>
        <Route path="/external/view" element={<RegistrationScreen />} />
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

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register('./sw.js')
//     .then((resp) => console.warn(resp))
//     .catch((e) => console.log(e));
// }
