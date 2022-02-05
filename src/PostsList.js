//Take source from Api
import React from "react";
import { Link } from 'react-router-dom';

const PostsList = ({ user }) => {
  return ( 
    <div className="post-container">
     <Link to={`/users/${user.id}`}><img className="photo" src={`${user.imageUrl + '?q=' + user.id } `} />
         <div className="name">{`${user.name} ${user.lastName}`}</div>
        <div className="title">{`${user.title}`}</div></Link>
    </div> 
  );
};




export default PostsList;
