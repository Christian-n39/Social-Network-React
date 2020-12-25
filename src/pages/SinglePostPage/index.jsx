import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import SinglePost from '../../components/SinglePost';



export default function SinglePostPage() {
  const [post, setPost] = useState({});
  const { id } = useParams()
  const token = useSelector(state => state.token)
  useEffect(() => {
    axios(`/posts/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
      .then(res => {
        setPost(res.data)
      })
      .catch(err => {
        if(err.response && err.response.data.message == 'Expired or invalid token') {
          window.localStorage.removeItem('token')
          window.location='/'
        }
        console.log(err.response)
      })
  }, [])
  const createComment = (comment, postId) => {
    axios('/comment', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: {
        postId,
        body: comment
      }
    })
      .then(res => {
        setPost({...post, comments: res.data.comments})
      })
      .catch(err =>{
        if(err.response && err.response.data.message == 'Expired or invalid token') {
          window.localStorage.removeItem('token')
          window.location='/'
        }
      })
  }

  return (
    <>
      {
        Object.keys(post).length !== 0 ? <SinglePost post={post} createComment={createComment} /> : ''
      }
    </>
  )
}