import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main";
import Index from "../pages/Index"
import Footer from "../components/Footer";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Index />
      },
      {
        path: '/footer',
        element: <Footer />
      },
    ]
  },
])

export default router;