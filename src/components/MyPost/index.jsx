import React from 'react';
import './styles.css';


export default function MyPost({ post: { photo, _id } }) {
  return (
    <article className="MyPost" >
      <img src={photo} alt="post" width="150px" height="150px" />
    </article>
  )
}