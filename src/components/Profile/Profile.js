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
            newPostText={props.newPostText}
            dispatch={props.dispatch}
          />
        </div>
    )
}

export default Profile;