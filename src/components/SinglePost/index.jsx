import React, { useState, useRef } from 'react';
import moment from 'moment';
import './styles.css';

export default function SinglePost({ post: { _id, title, body, createdAt, photo, user, comments }, createComment }) {
  const [comment, setComment] = useState('');
  const input = useRef(null)
  const handleSubmit = () => {
    createComment(comment, _id)
    input.current.value = ''
  }
  return (
    <>
    <section className="Container">
      <div className="SinglePost-user" >
        <img src='https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/69110172_1106403609569513_4906856838391136256_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEa65QfVIfk22mGP3BsKV1oXj3T4vkMK4RePdPi-QwrhLyl6nEged_ciq1-052RwqQkteE8f9I5fKLSap6f6lpa&_nc_ohc=p3P0stDDiN4AX9rMlGY&_nc_ht=scontent.fntr5-1.fna&oh=d93a308fd2d7f804dbd0cea18a5b4fcf&oe=6004A436' alt={user.name} width="100px" />
        <p>{user.name}</p>
      </div>
      <article className="SinglePost-body" >
        <div className="SinglePost-user-responsive" >
          <div className="SinglePost-user-responsive-name" >
            <img src='https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/69110172_1106403609569513_4906856838391136256_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEa65QfVIfk22mGP3BsKV1oXj3T4vkMK4RePdPi-QwrhLyl6nEged_ciq1-052RwqQkteE8f9I5fKLSap6f6lpa&_nc_ohc=p3P0stDDiN4AX9rMlGY&_nc_ht=scontent.fntr5-1.fna&oh=d93a308fd2d7f804dbd0cea18a5b4fcf&oe=6004A436' alt={user.name} width="100px" />
            <p>{user.name}</p>
          </div>
        </div>
        <header>
          <h2>{title}</h2>
          <span>{moment(createdAt).fromNow()}</span>
        </header>
        <img src={photo} alt={title} width="600px" />
        <p>{body}</p>
      </article>
    <aside className="Comments-section">
      <div className="Comments-title" >
        <p>Comments</p>
      </div>
      <div className="Comments" >
        {
          comments.map(comment => (
            <div key={comment._id} className="Comment" >
              <strong>{comment.username}</strong>
              <p>{comment.body}</p>
            </div>
          ))
        }
      </div>
      <div className="Comments-actions" >
        <input type="text" ref={input} placeholder="Make a comment!" onChange={e => setComment(e.target.value)} />
        <button onClick={handleSubmit} >Send</button>
      </div>
    </aside>
    </section>
    </>
  )
}