import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./rootRoute";
import { aboutRoute } from "./routes/aboutRoute";
import { deferredRoute } from "./routes/deferred";
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
import { usersRoute } from "./routes/usersRoute";

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  usersRoute,
  deferredRoute,
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
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
