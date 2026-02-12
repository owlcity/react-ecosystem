import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

/**
 * 1️⃣ 创建 RootRoute
 * 所有路由的父级
 */
const rootRoute = createRootRoute({
  component: () => (
    <>
      <h1>My APP</h1>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
});

/**
 * 2️⃣ 创建子路由
 */
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <>
      <h2>Home Page</h2>
    </>
  ),
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: () => (
    <>
      <h2>About Page</h2>
    </>
  ),
});

/**
 * 3️⃣ 构建路由树
 */
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

/**
 * 4️⃣ 创建 router
 */
export const router = createRouter({
  routeTree,
});

/**
 * 5️⃣ 类型注册（重要）
 * 注册路由器实例以确保类型安全
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
