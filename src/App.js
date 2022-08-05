import React, { useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'HTML', body: 'Description'},
    {id: 2, title: 'CSS', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <PostList posts={posts} title='Список постов 1'/>
    </div>
  )
}

export default App
