import { createBrowserRouter } from "react-router-dom";
import LayoutDashboard from "./layout/LayoutDashboard";
import PageBlank from "./pages/Blank/Page";
import PageVideo from "./pages/Videos/Page";
import PageVideosFolder from "./pages/Videos/VideosFolder/Page";
import LayoutVideoPage from "./pages/Videos/Layout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutDashboard/>,
        children: [
            {
                path: 'dashboard',
                element: <PageBlank />,
            },
            {
                path: 'videos',
                element: <LayoutVideoPage />,
                children: [
                    {
                        index: true,
                        path: '',
                        element: <PageVideo />
                    },
                    {
                        path: ':folder',
                        element: <PageVideosFolder />
                    }
                ]
            },
            {
                path: 'player',
                element: <PageBlank />,
            },
            {
                path: 'analytics',
                element: <PageBlank />,
            },
            {
                path: 'configurations',
                element: <PageBlank />,
            },
        ]
    },
]);

export default router;
