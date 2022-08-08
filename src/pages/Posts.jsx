import React, { useEffect, useState } from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/MyModal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import { usePosts } from '../hooks/usePosts'
import Loader from '../components/UI/Loader/Loader'
import { getPageCount } from '../utils/pages'

import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching'
import Pagination from '../components/UI/pagination/Pagination'

function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostLoading, postError] = useFetching( async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  useEffect( () => {
    fetchPosts(limit, page)
  }, [page])

  const removePost = (post) => {
    setPosts(posts.filter( p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
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

      <Pagination
        totalPages={totalPages}
        page={page}
       changePage={changePage}
      />

    </div>
  )
}

export default Posts
