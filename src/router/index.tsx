import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { aboutRoute } from "./routes/aboutRoute";
import { indexRoute } from "./routes/indexRoute";
import { postsRoute } from "./routes/postsRoute";

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, postsRoute]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
