import { fetchPosts } from "@/api/posts";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";

export const deferredRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/deferred",
  loader: async () => {
    const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const postsPromise = fetchPosts();

    const fastData = await postsPromise;

    const deferredSlowData = postsPromise.then(async (data) => {
      await delay(1500);
      return data;
    });

    return {
      fastData,
      deferredSlowData,
    };
  },
}).lazy(() => import("@/pages/deferred/deferred").then((mod) => mod.Route));
