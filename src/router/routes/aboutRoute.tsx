import { AboutPage } from "@pages/about/about";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../rootRoute";

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
  // beforeLoad: ({ params }) => {
  //   // console.log(params);
  //   if (!confirm("确定进入关于页面吗？")) {
  //     throw new Error("User cancelled");
  //   }
  // },
});
