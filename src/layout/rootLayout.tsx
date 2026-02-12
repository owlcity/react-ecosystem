import { Outlet } from "@tanstack/react-router";

export const RootLayout = () => {
  return (
    <>
      <h1>My APP</h1>
      <Outlet />
    </>
  );
};
