import { RouteObject } from "react-router-dom";

import { OverviewPage } from "@/pages/overview/overview-page";

export const overviewRoute: RouteObject = {
  path: "/overview",
  element: <OverviewPage />,
};
