import React from 'react';
import { BsFilePost } from 'react-icons/bs'
import './styles.css';

export default function CreatePost() {
  return (
    <section className="Create">
      <div className="Create-form-wrapper">
        <div className="Create-icon-badge">
          <BsFilePost size='40px' />
        </div>
        <h2 className="Create-title">Create</h2>


        <form className="Create-form" >
          <div className="Create-form-inputWrapper" >
            <input className="Create-form-input" type="text" placeholder="Title" name="title"/>
          </div>
          <div className="Create-form-inputWrapper">
            <input className="Create-form-input" type="text" placeholder="Body" name="body" />
          </div>
          <input className="Create-form-input-image" type="file" />
          <button type="button" >Submit Post</button>
        </form>
      </div>
    </section>
  )
}