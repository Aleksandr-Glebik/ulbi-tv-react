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

  const removePost = (post) => {
    setPosts(posts.filter( p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>

      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='Список постов 1'/>
        : <div style={{textAlign: 'center'}}><h1>Посты не были найдены!!!</h1></div>
      }


    </div>
  )
}

export default App
