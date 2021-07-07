import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPostsForm = (props) => {
  let PostsElements =
    props.posts.map(p => <Post message={ p.message } key={ p.id } likesCount={ p.likesCount } />)

  let newPostElement = React.createRef();

  let onaddPost = () => {
    props.addPost();
  }


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatNewPostText(text);
  }
  return (
    <form onSubmit={ props.handleSubmit}>
      <div className={ s.postsBlock }>
        <h3>
          My posts
        </h3>
        <div>
          <div>
            <Field
              component={'textarea'}
              name='newmessagebody'
              placeholder='yes'
              onChange={ onPostChange }
              ref={ newPostElement }
              value={ props.newPostText } />
          </div>
          <div>
            <button onClick={ onaddPost }>Add post</button>
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
  
  const onSubmit = value => {
    alert(value.newmessagebody);
  }
  return (
    <div>
      <MyPostsReuduxForm onSubmit={ onSubmit } 
      posts={props.posts}
      updatNewPostText={ props.updatNewPostText}
      addPost={ props.addPost}
      />
      
    </div>
  )
}

export default MyPosts;