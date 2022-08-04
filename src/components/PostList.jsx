import React from "react"
import PostItem from "./PostItem"

const PostList = ({posts, title}) => {
    // console.log('props', props);
    return (
        <React.Fragment>
            <h1
              style={{textAlign: 'center'}}
            >
                {title}
            </h1>
            {posts.map( post => {
                return <PostItem key={post.id} post={post} />
            })}
        </React.Fragment>
    )
}

export default PostList
