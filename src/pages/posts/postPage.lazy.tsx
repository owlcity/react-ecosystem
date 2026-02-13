import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/posts/$postId")({
  component: PostComponent,
});

function PostComponent() {
  const post = Route.useLoaderData();

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold">{post.title}</h4>
      <hr className="opacity-20" />
      <div className="text-sm">{post.body}</div>
    </div>
  );
}
