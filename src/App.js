import React, { useRef, useState } from 'react'
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

  const [title, setTitle] = useState('')
  const bodyInputRef = useRef()

  const addNewPost = (event) => {
    event.preventDefault()
    console.log('title', title);
    console.log(bodyInputRef.current);
    console.log(bodyInputRef.current.value);
  }

  return (
    <div className='App'>
      <form>
        {/* управляемый компонент */}
        <MyInput
          type={'text'}
          placeholder={'Название поста'}
          value={title}
          onChange={ event => setTitle(event.target.value)}
        />
        {/* неуправляемый или неконтролируемый компонент */}
        <MyInput ref={bodyInputRef} type={'text'} placeholder={'Описание поста'}/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Список постов 1'/>
    </div>
  )
}

export default App
