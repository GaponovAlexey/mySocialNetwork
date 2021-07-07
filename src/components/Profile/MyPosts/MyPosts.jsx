import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPostsForm = (props) => {
  let PostsElements =
    props.posts.map(p => <Post
      message={ p.message || p.newmessagebody }
      key={ p.id } 
      likesCount={ p.likesCount } />)

  let newPostElement = React.createRef();

  return (
    <form onSubmit={ props.handleSubmit }>
      <div className={ s.postsBlock }>
        <h3>
          My posts
        </h3>
        <div>
          <div>
            <Field
              component={ 'textarea' }
              name='newmessagebody'
              placeholder='yes'
              onChange={ '' }
              ref={ newPostElement }
              value={ props.newPostText } />
          </div>
          <div>
            <button >Add post</button>
          </div>
        </div>
        <div className={ s.posts }>
          { PostsElements }
        </div>
      </div>
    </form>
  )
}


const MyPostsReuduxForm = reduxForm({ form: 'MyPost' })(MyPostsForm)

const MyPosts = (props) => {

  let addPost = (value) => {
    //alert(value.newmessagebody)
    props.addPost(value.newmessagebody);
  }
  return (
    <div>
      <MyPostsReuduxForm onSubmit={ addPost }
        posts={ props.posts }
        addPost={ props.addPost }
        newmessagebody={ props.name }
      />

    </div>
  )
}

export default MyPosts;