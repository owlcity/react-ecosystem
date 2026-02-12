import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { aboutRoute } from "./routes/aboutRoute";
import { indexRoute } from "./routes/indexRoute";

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
