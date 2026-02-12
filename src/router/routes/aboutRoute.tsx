import { AboutPage } from "@pages/about/about";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
