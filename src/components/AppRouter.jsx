import React from "react"
import { Routes, Route } from "react-router-dom"
// import About from "../pages/About"
// import Posts from "../pages/Posts"
// import Error from "../pages/Error"
// import PostIdPage from '../pages/PostIdPage'
// import Home from "../pages/Home"
import { privateRoutes, publicRoutes } from "../router/index"

const AppRouter = () => {
    let isAuth = true
    
    return (
        <Routes>
            {/* <Route path='/' element={<Home />} />

            <Route path='posts' element={<Posts />} />
            <Route path='posts'>
                <Route path=':id' element={<PostIdPage />} />
            </Route>

            <Route path='about' element={<About />} />
            <Route path="*" element={<Error />} /> */}
            {
                isAuth
                    ? privateRoutes.map( (route, ind) =>
                        <Route
                          key={ind}
                          path={route.path}
                          element={route.element}
                          exact={route.exact}
                        />
                      )
                    : publicRoutes.map( (route, ind) =>
                        <Route
                            key={ind}
                            path={route.path}
                            element={route.element}
                            exact={route.exact}
                        />
                      )
            }
        </Routes>
    )
}

export default AppRouter