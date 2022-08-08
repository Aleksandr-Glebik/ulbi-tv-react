import React from "react"
import { Routes, Route } from "react-router-dom"
import About from "../pages/About"
import Posts from "../pages/Posts"
import Error from "../pages/Error"
import PostIdPage from '../pages/PostIdPage'
import Home from "../pages/Home"

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='posts' element={<Posts />} />
            <Route path='posts'>
                <Route path=':id' element={<PostIdPage />} />
            </Route>

            <Route path='about' element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default AppRouter