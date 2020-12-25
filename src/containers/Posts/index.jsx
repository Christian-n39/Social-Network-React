import React from 'react';
import { useSelector } from 'react-redux';
import Post from '../../components/Post';
import axios from 'axios';
import moment from 'moment';


export default function Posts({ posts, updateLike }) {
  const token = useSelector(state => state.token)
  const user = useSelector(state => state.user)

  const handleLike = (e, postId) => {
    e.target.classList.toggle('is-liked')
    axios('/like', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: { postId }
    })
      .then(res => {
        updateLike(res.data)
      })
      .catch(err => {
        if(err.response && err.response.data.message == 'Expired or invalid token') {
          window.localStorage.removeItem('token')
          window.location='/'
        }
        console.log(err)
      })
  }
  const postsSortedByDate = posts.sort((a, b) => new moment(a.createdAt).format('YYYYMMDD') - new moment(b.createdAt).format('YYYYMMDD'))
  return (
    postsSortedByDate.map(post => (
      <Post key={post._id} post={post} isLiked={post.likes.find(userLike => userLike.username == user.name)} handleLike={handleLike} />
    ))
  )
}