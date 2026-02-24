import { router, RouterPath } from "@/router";

export const AboutPage = () => {
  return (
    <>
      <h2>About Page</h2>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          onClick={() => router.navigate({ to: RouterPath.root() })}
        >
          go home
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          onClick={() => router.navigate({ to: RouterPath.posts() })}
        >
          go posts
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer"
          onClick={() => router.navigate(RouterPath.post("2"))}
        >
          post detail 2
        </button>
      </div>
    </>
  );
};
