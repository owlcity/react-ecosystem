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
            preload="intent"
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
        <li>
          <Link
            to="/deferred"
            activeProps={{
              style: {
                fontWeight: "bold",
              },
            }}
          >
            Deferred
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
            to="/users"
            params={{ id: "123" }}
            search={{ page: 2, sort: "id" }}
            hash="section1"
            replace
            activeProps={{
              style: {
                fontWeight: "bold",
              },
            }}
          >
            Users
          </Link>
        </li>
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
