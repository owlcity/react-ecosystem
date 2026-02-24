import { createRootRoute, Link } from "@tanstack/react-router";
import { RootLayout } from "../layout/rootLayout";

export const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => {
    return (
      <div>
        <p>404 Not Found</p>
        <Link to="/">Start Over</Link>
      </div>
    );
  },
});
