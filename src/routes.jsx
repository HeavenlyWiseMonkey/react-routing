import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import ImageGallery from "./ImageGallery";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name?",
    element: <Profile />,
  },
  {
    path: "imageGallery",
    element: <ImageGallery />,
  },
];

export default routes;