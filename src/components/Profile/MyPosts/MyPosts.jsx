import React  from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControl/FormsControl';
import { maxLenghtCreator, required } from '../../utils/Validators/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MaxLenght = maxLenghtCreator(10);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={ props.handleSubmit }>
      <div className={ s.postsBlock }>
        <h3>
          My posts
        </h3>
        <div>
          <div>
            <Field
              component={ Textarea }
              name='newmessagebody'
              placeholder='yes'
              validate={ [required, MaxLenght] }
            />
            <div>
              <button >Add post</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}


const MyPostsReuduxForm = reduxForm({ form: 'MyPost' })(MyPostsForm)

const MyPosts = props => {
  let PostsElements =
     [...props.posts].reverse()
      .map(p => <Post
      message={ p.message || p.newmessagebody }
      key={ p.id }
      likesCount={ p.likesCount } />)

  let addPost = value => {
    props.addPost(value.newmessagebody);
  }
  return (
    <div>
      <MyPostsReuduxForm onSubmit={ addPost }
        value={ props.newPostText }
      />
      <div className={ s.posts }>
        { PostsElements }
      </div>
    </div>
  )
}

export default MyPosts;