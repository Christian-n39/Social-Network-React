import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Posts from '../../containers/Posts';
import './styles.css';

export default function Home() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const token = useSelector(state => state.token)
  useEffect(() => {
    setLoading(true)
    axios('/posts', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        setPosts(res.data)
        setLoading(false)
      })
      .catch(err => {
        if(err.response && err.response.data.message == 'Expired or invalid token') {
          window.localStorage.removeItem('token')
          window.location='/'
        }
        setLoading(false)
      })
  }, [])
  const updateLike = (newData) => {
    setPosts(posts.map(item => {
      if(item._id == newData._id) {
        return { ...item, likes: newData.likes }
      }
      return item
    }))
  }
  return (
    <section className="Home">
      {
        loading 
          ? ''
          : 
          posts.length !== 0 &&
          <Posts posts={posts} updateLike={updateLike} />
      }
    </section>
  )
}