import { createBrowserRouter, RouteObject } from "react-router-dom";

import { layoutRoute } from "@/routes/layout";
import { overviewRoute } from "@/routes/overview";
import { settingsRoute } from "@/routes/settings";
import { usersRoute } from "@/routes/users";

const routes: RouteObject[] = [
  {
    ...layoutRoute,
    index: false,
    children: [
      ...layoutRoute.children!,
      overviewRoute,
      usersRoute,
      settingsRoute,
    ],
  },
];

export const router = createBrowserRouter(routes);
