import React from "react"
import PostItem from "./PostItem"

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <div >
                <h1 style={{textAlign: 'center'}}>Посты не были найдены!!!</h1>
            </div>
        )
    }

    return (
        <React.Fragment>
            <h1
              style={{textAlign: 'center'}}
            >
                {title}
            </h1>
            {posts.map( (post, index) => {
                return <PostItem remove={remove} number={index + 1} key={post.id} post={post} />
            })}
        </React.Fragment>
    )
}

export default PostList

