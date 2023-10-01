import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main";
import Index from "../pages/index"
import Characters from "../pages/Characters"
import Films from "../pages/Films"
import Starships from "../pages/Starships"

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
        path: '/characters',
        element: <Characters />
      },
      {
        path: '/films',
        element: <Films />
      },
      {
        path: '/starships',
        element: <Starships />
      },
    ]
  },
])

export default router;