import { createRootRoute, Link } from "@tanstack/react-router";
import { RootLayout } from "../layout/rootLayout";

export const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  },
});
