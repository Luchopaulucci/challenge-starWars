import { createBrowserRouter } from "react-router-dom"
import Main from "../layouts/Main";
import Index from "../pages/index"
import Characters from "../pages/Characters"
import Films from "../pages/Films"
import Starships from "../pages/Starships"
import InfoCharacter from "../pages/InfoCharacter"
import InfoFilm from "../pages/InfoFilm"
import InfoStarchip from "../pages/InfoStarship"

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
        element: <Characters />,
      },
      {
        path: '/infocharacter/:name',
        element: <InfoCharacter />
      },
      {
        path: 'characters/infocharacter/:name',
        element: <InfoCharacter />
      },

      {
        path: '/films/',
        element: <Films />,
      },
      {
        path: 'films/infofilm/:title',
        element: <InfoFilm />
      },

      {
        path: '/starships',
        element: <Starships />,
      },
      {
        path: 'starships/infostarship/:name',
        element: <InfoStarchip />
      },
    ]
  },
])

export default router;