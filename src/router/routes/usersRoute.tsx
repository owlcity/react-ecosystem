import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";

export const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  // component: UsersComponent,
  validateSearch: (search: Record<string, unknown>) => ({
    page: Number(search.page) || 1,
    sort: search.sort ?? "name",
  }),
}).lazy(() => import("@pages/users/users").then((mod) => mod.Route));
