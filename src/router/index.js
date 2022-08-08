import Home from '../pages/Home'
import About from '../pages/About'
import Posts from '../pages/Posts'
import PostIdPage from '../pages/PostIdPage'
import Error from '../pages/Error'
import Login from '../pages/Login'


export const privateRoutes = [
    {path: '/', element: <Home />, exact: true },
    {path: '/about', element: <About />, exact: true },
    {path: '/posts', element: <Posts />, exact: true },
    {path: '/posts/:id', element: <PostIdPage />, exact: true },
    {path: '*', element: <Error />, exact: true },
]

export const publicRoutes = [
    {path: '/', element: <Login />, exact: true },
    {path: '/login', element: <Login />, exact: true },
    {path: '/about', element: <Login />, exact: true },
    {path: '/posts', element: <Login />, exact: true },
    {path: '/posts/:id', element: <Login />, exact: true },
    {path: '*', element: <Error />, exact: true },
]