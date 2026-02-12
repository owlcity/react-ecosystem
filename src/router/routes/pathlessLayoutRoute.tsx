import { PathlessLayoutComponent } from "@/pages/pathLess/pathLessLayout";
import { PathlessLayout2Component } from "@/pages/pathLess/PathlessLayout2Component";
import { PathlessLayoutAComponent } from "@/pages/pathLess/PathlessLayoutAComponent";
import { PathlessLayoutBComponent } from "@/pages/pathLess/PathlessLayoutBComponent";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";

export const pathlessLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "_pathlessLayout",
  component: PathlessLayoutComponent,
});

export const nestedPathlessLayout2Route = createRoute({
  getParentRoute: () => pathlessLayoutRoute,
  id: "_nestedPathlessLayout",
  component: PathlessLayout2Component,
});

export const pathlessLayoutARoute = createRoute({
  getParentRoute: () => nestedPathlessLayout2Route,
  path: "/route-a",
  component: PathlessLayoutAComponent,
});

export const pathlessLayoutBRoute = createRoute({
  getParentRoute: () => nestedPathlessLayout2Route,
  path: "/route-b",
  component: PathlessLayoutBComponent,
});
