import React, { useState, useMemo } from 'react'
import './styles/App.css'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'HTML', body: 'Markup'},
    {id: 2, title: 'CSS', body: 'Styles'},
    {id: 3, title: 'Javascript', body: 'Functionality'},
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo( () => {
    console.log('getSortedPosts отработала');
    if (selectedSort) {
      return [...posts].sort( (a, b) => a[selectedSort].localeCompare(b[selectedSort]) )
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo( () => {
    return sortedPosts.filter( post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter( p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    // console.log('sort', sort)
    setSelectedSort(sort)
  }

  return (
    <div className='App'>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder={'Поиск...'}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue={'Сортировка'}
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов 1'/>
        : <div style={{textAlign: 'center'}}><h1>Посты не были найдены!!!</h1></div>
      }


    </div>
  )
}

export default App
