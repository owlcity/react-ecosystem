import { Link, Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <>
      <h1>My APP</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
