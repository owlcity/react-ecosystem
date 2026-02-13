import { fetchPost, fetchPosts } from "@/api/posts";
import { PostErrorComponent } from "@/pages/posts/errorPage";
import { PostsIndexPage } from "@/pages/posts/pageIndexPage";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";

export const postsLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "posts",
  loader: () => fetchPosts(),
  pendingComponent: () => <div>Loading posts...</div>,
}).lazy(() => import("@pages/posts/posts.lazy").then((mod) => mod.Route));

export const postsIndexRoute = createRoute({
  getParentRoute: () => postsLayoutRoute,
  path: "/",
  component: PostsIndexPage,
});

export const postRoute = createRoute({
  getParentRoute: () => postsLayoutRoute,
  path: "$postId",
  errorComponent: PostErrorComponent,
  loader: ({ params }) => fetchPost(params.postId),
}).lazy(() => import("@pages/posts/postPage.lazy").then((mod) => mod.Route));
