import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";

export const postsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "posts",
}).lazy(() => import("@pages/posts/posts.lazy").then((mod) => mod.Route));
