// layouts
import AppLayout from "@layouts/App";

// pages
import HomePage from "@pages/Home";
import NotFoundPage from "@pages/NotFound";

// routes
const routes = [
  {
    component: AppLayout,
    routes: [
      { exact: true, path: "/", component: HomePage },
      { component: NotFoundPage },
    ],
  },
];

// export
export default routes;
