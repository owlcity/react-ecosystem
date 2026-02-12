import { postRoute } from "@/router/routes/postsRoute";

export const postComponent = () => {
  const post = postRoute.useLoaderData();

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold">{post.title}</h4>
      <hr className="opacity-20" />
      <div className="text-sm">{post.body}</div>
    </div>
  );
};
