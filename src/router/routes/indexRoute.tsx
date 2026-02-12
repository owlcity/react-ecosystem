import { IndexPage } from "@pages/index/index";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});
