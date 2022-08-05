import React, { useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'HTML', body: 'Description'},
    {id: 2, title: 'CSS', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'},
  ])

  const [post, setPost] = useState({
    title: '',
    body: ''
  })


  const addNewPost = (event) => {
    event.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className='App'>
      <form>
        <MyInput
          type={'text'}
          placeholder={'Название поста'}
          value={post.title}
          onChange={ event => setPost({...post, title: event.target.value})}
        />
        <MyInput
          type={'text'}
          placeholder={'Описание поста'}
          value={post.body}
          onChange={ event => setPost({...post, body: event.target.value} )}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Список постов 1'/>
    </div>
  )
}

export default App
