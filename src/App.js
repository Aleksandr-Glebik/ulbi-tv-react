import React, { useEffect, useState } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'
import { usePosts } from './hooks/usePosts'
import Loader from './components/UI/Loader/Loader'

import PostService from './API/PostService'

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostLoading, setIsPostsLoading] = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  useEffect( () => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    setIsPostsLoading(true)
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsPostsLoading(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter( p => p.id !== post.id))
  }

  return (
    <div className='App'>
      <button onClick={fetchPosts}>Получить посты</button>
      <MyButton style={{marginTop: '30px'}} onClick={ () => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />

      {isPostLoading
        ? <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
          }}><Loader /></div>
        : <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title='Список постов 1'
          />
      }


    </div>
  )
}

export default App
