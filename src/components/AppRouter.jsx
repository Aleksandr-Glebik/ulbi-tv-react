import React, { useContext } from "react"
import { Routes, Route } from "react-router-dom"
import { AuthContext } from "../context"
import { privateRoutes, publicRoutes } from "../router/index"

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)

    return (
        <Routes>
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