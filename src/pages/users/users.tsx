import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/users")({
  component: UsersComponent,
});

function UsersComponent() {
  //   const users = Route.useLoaderData();
  console.log("search", Route.useSearch());
  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold">Users</h4>
      <hr className="opacity-20" />
    </div>
  );
}
