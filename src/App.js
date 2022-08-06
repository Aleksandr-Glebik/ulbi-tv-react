import React, { useState, useMemo } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'HTML', body: 'Markup'},
    {id: 2, title: 'CSS', body: 'Styles'},
    {id: 3, title: 'Javascript', body: 'Functionality'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo( () => {
    if (filter.sort) {
      return [...posts].sort( (a, b) => a[filter.sort].localeCompare(b[filter.sort]) )
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo( () => {
    return sortedPosts.filter( post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter( p => p.id !== post.id))
  }

  return (
    <div className='App'>
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
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title='Список постов 1'
      />
    </div>
  )
}

export default App
