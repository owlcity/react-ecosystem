import { createRootRoute } from "@tanstack/react-router";
import { RootLayout } from "../layout/rootLayout";

export const rootRoute = createRootRoute({
  component: RootLayout,
});
