import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/posts")({
  component: PostsPage,
});

function PostsPage() {
  return <h2>Posts Page</h2>;
}
