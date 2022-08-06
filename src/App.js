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
import { useFetching } from './hooks/useFetching'

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  // const [isPostLoading, setIsPostsLoading] = useState(false)

  const [fetchPosts, isPostLoading, postError] = useFetching( async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  useEffect( () => {
    fetchPosts()
  }, [])

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

      { postError &&
          <hi style={{display: 'flex', justifyContent: 'center'}}>Произошла ошибка {postError}</hi>
      }

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
