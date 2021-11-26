// layouts
import AppLayout from "@layouts/App";

// pages
import HomePage from "@pages/Home";
import AboutPage from "@pages/About";
import NotFoundPage from "@pages/NotFound";

// routes
const routes = [
  {
    component: AppLayout,
    routes: [
      { exact: true, path: "/", component: HomePage },
      { exact: true, path: "/about", component: AboutPage },
      { component: NotFoundPage },
    ],
  },
];

// export
export default routes;
