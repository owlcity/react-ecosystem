import { Link, Outlet } from "@tanstack/react-router";

export const PathlessLayout2Component = () => {
  return (
    <div>
      <div>I'm a nested pathless layout</div>
      <div className="flex gap-2 border-b">
        <Link
          to="/route-a"
          activeProps={{
            className: "font-bold",
          }}
        >
          Go to Route A
        </Link>
        <Link
          to="/route-b"
          activeProps={{
            className: "font-bold",
          }}
        >
          Go to Route B
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
