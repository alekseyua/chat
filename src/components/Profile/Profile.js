import React from 'react';
import MyPost from './MyPost/MyPost'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './profile.module.scss';
 
const Profile = (props) => {

  return(
        <div>
          <ProfileInfo />          
          <MyPost 
            posts={props.posts} 
            addPost={props.addPost} 
            updateNewPostText={props.updateNewPostText} 
            newPostText={props.newPostText}
          />
        </div>
    )
}

export default Profile;