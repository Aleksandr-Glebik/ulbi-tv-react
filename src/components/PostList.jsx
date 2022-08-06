import React from "react"
import PostItem from "./PostItem"
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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
            <TransitionGroup>
            {posts.map( (post, index) => {
                return (
                <CSSTransition
                  key={post.id}
                  timeout={600}
                  classNames={'post'}
                >
                    <PostItem remove={remove} number={index + 1}  post={post} />
                </CSSTransition>
                        )
            })}
            </TransitionGroup>

        </React.Fragment>
    )
}

export default PostList

