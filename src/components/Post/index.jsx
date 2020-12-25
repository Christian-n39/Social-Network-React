import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import moment from 'moment';
import { FaRegCommentDots } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai'

export default function Post({post: { _id, title, body, createdAt, photo, user, likes }, handleLike, isLiked, isMine, handleDelete}) {
  return (
    <article className="Post" >
      <div className="Post-user" >
        <div className="Post-user-name" >
          <img src='https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/69110172_1106403609569513_4906856838391136256_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEa65QfVIfk22mGP3BsKV1oXj3T4vkMK4RePdPi-QwrhLyl6nEged_ciq1-052RwqQkteE8f9I5fKLSap6f6lpa&_nc_ohc=p3P0stDDiN4AX9rMlGY&_nc_ht=scontent.fntr5-1.fna&oh=d93a308fd2d7f804dbd0cea18a5b4fcf&oe=6004A436' alt={user.name} width="100px" />
          <p>{user.name}</p>
        </div>
        <span>{moment(createdAt).fromNow()}</span>
        {
          isMine &&
            <AiOutlineDelete className="Delete-post" size='40px' color='red' onClick={() => handleDelete(_id)} />
        }
      </div>
      <div className="Post-body" >
        <h2>{title}</h2>
        <img src={photo} alt={title} width="600px" />
        <p>{body}</p>
      </div>
      <div className="Post-options" >
          <div onClick={(e) => handleLike(e, _id)} className={isLiked? "like is-liked" : 'like'}>
            {likes.length}
          </div>
          <div>
            <Link to={`/posts/${_id}`}>
              <FaRegCommentDots size='40px' color='#1da1f2' />
            </Link>
          </div>
      </div>
    </article>
  )
}