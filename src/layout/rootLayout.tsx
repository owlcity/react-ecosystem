import { Link, Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <>
      <h1>My APP</h1>
      <ul>
        <li>
          <Link
            to="/"
            activeProps={{
              style: {
                fontWeight: "bold",
              },
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            activeProps={{
              style: {
                fontWeight: "bold",
              },
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/posts"
            activeProps={{
              style: {
                fontWeight: "bold",
              },
            }}
          >
            Posts
          </Link>
        </li>
        {/* <li>
          <Link
            to="/search"
            search={{
              query: "tanstack",
            }}
          >
            搜索
          </Link>
        </li> */}
        <li>
          <Link
            to="/route-a"
            activeProps={{
              className: "font-bold",
            }}
          >
            Pathless Layout
          </Link>
          <Link
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            to="/this-route-does-not-exist"
            activeProps={{
              className: "font-bold",
            }}
          >
            This Route Does Not Exist
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
