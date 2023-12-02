import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import ParametricPage from "./pages/ParametricPage";

const router = [
    {
        element: <MainPage />,
        index: true
    },
    {
        element: <AboutPage />,
        path: '/about'
    },
    {
        element: <ParametricPage />,
        path: '/facts/:factId'
    },
    {
        element: <ErrorPage / >,
        path: '*'
    }
]

export default router