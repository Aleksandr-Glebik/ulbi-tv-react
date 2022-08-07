import React from "react"
import About from "../pages/About"
import Posts from "../pages/Posts"
import Error from "../pages/Error"
import { Routes, Route } from "react-router-dom"

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' exact element={<About />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/about' element={<About />} />
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}

export default AppRouter