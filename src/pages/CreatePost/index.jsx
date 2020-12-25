import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { toast } from 'react-toastify';
import { BsFilePost } from 'react-icons/bs'
import './styles.css';

export default function CreatePost() {
  const user = useSelector(state => state.user)
  if(!user) window.location='/';
  const history = useHistory()
  const bodyInput = useRef(null)
  const [post, setPost] = useState({ title: '', body: '', image: '' });
  const handleChange = (key, value) => {
    setPost({...post, [key]: value})
  }
  const postDetails = (e) => {
    e.preventDefault()
    if(!post.title, !post.body, !post.image) { toast.info('Fields must not be empty'); return false }
    const data = new FormData();
    data.append('file', post.image)
    data.append('upload_preset', 'socialmern')
    data.append('cloud_name', 'socialmern')
    axios(process.env.REACT_APP_CLOUDINARY_POST_URL, {
      method: 'POST',
      data
    })
      .then(res => {
        sendPost(res.data.url)
      })
      .catch(err => {
        console.log(err.response)
      })
  }
  const token = useSelector(state => state.token);
  const sendPost = (url) => {
    axios('/createPost', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        title: post.title,
        body: post.body,
        url
      }
    })
      .then((res) => {
        toast.info(res.data.message)
        history.push('/home')
      })
      .catch(err => {
        if(err.response.data.message == 'Expired or invalid token') {
          localStorage.removeItem('token')
          window.location = '/'
          return false
        }
        toast.info(err.response.data.message)
      })
  }
  return (
    <section className="Create">
      <div className="Create-form-wrapper">
        <div className="Create-icon-badge">
          <BsFilePost size='40px' />
        </div>
        <h2 className="Create-title">Create</h2>

        <form onSubmit={(e)=>postDetails(e)} className="Create-form" >
          <div className="Create-form-inputWrapper" >
            <input className="Create-form-input" onChange={e => handleChange('title', e.target.value)} type="text" placeholder="Title" name="title"/>
          </div>
          <div className="Create-form-inputWrapper" >
            <input className="Create-form-input" onChange={e => handleChange('body', e.target.value)} type="text" placeholder="Title" name="body"/>
          </div>
          <input
            className="Create-form-input-image"
            type="file"
            onChange={e=> handleChange('image', e.target.files[0])}
          />
          <button type="submit" >Submit Post</button>
        </form>
      </div>
    </section>
  )
}