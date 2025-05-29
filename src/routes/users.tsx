import { RouteObject } from "react-router-dom";

import { UsersPage } from "@/pages/users/users-page";

export const usersRoute: RouteObject = {
  path: "/users",
  element: <UsersPage />,
};
