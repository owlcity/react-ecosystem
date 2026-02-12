import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { aboutRoute } from "./routes/aboutRoute";
import { indexRoute } from "./routes/indexRoute";
import {
  nestedPathlessLayout2Route,
  pathlessLayoutARoute,
  pathlessLayoutBRoute,
  pathlessLayoutRoute,
} from "./routes/pathlessLayoutRoute";
import {
  postRoute,
  postsIndexRoute,
  postsLayoutRoute,
} from "./routes/postsRoute";

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  postsLayoutRoute.addChildren([postsIndexRoute, postRoute]),
  pathlessLayoutRoute.addChildren([
    nestedPathlessLayout2Route.addChildren([
      pathlessLayoutARoute,
      pathlessLayoutBRoute,
    ]),
  ]),
]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
