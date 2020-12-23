import React, { useState } from 'react';
import { BsFilePost } from 'react-icons/bs'
import './styles.css';

export default function CreatePost() {
  const [post, setPost] = useState({ title: '', body: '', image: '' });
  const handleChange = (key, value) => {
    setPost({...post, key: value})
  }
  // const postDetails = () => {
  //   const data = new FormData();
  //   data.append('file', post.image)
  //   data.append('upload_preset', 'socialmern')
  // }
  return (
    <section className="Create">
      <div className="Create-form-wrapper">
        <div className="Create-icon-badge">
          <BsFilePost size='40px' />
        </div>
        <h2 className="Create-title">Create</h2>

        <form className="Create-form" >
          <div className="Create-form-inputWrapper" >
            <input className="Create-form-input" onChange={e => handleChange('title', e.target.value)} type="text" placeholder="Title" name="title"/>
          </div>
          <div className="Create-form-inputWrapper">
            <input className="Create-form-input" onChange={e => handleChange('body', e.target.value)} type="text" placeholder="Body" name="body" />
          </div>
          <input 
            className="Create-form-input-image"
            type="file"
            onChange={e=> handleChange('image', e.target.files)}
          />
          <button type="button" >Submit Post</button>
        </form>
      </div>
    </section>
  )
}