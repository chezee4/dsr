import { RouteObject, Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

import DashboardLayout from "@/layouts/dashboard-layout";

export const layoutRoute: RouteObject = {
  element: (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ),
  children: [
    {
      path: "/",
      element: <Navigate to="/overview" replace />,
    },
  ],
};
