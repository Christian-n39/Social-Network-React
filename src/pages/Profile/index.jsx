import React from 'react';
import MyPosts from '../../containers/MyPosts';
import './styles.css';

export default function Profile() {
  return (
    <section className="Profile" >
      <section className="Profile-hero" >
        <img src="https://scontent.fntr5-1.fna.fbcdn.net/v/t1.0-9/69110172_1106403609569513_4906856838391136256_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEa65QfVIfk22mGP3BsKV1oXj3T4vkMK4RePdPi-QwrhLyl6nEged_ciq1-052RwqQkteE8f9I5fKLSap6f6lpa&_nc_ohc=p3P0stDDiN4AX9rMlGY&_nc_ht=scontent.fntr5-1.fna&oh=d93a308fd2d7f804dbd0cea18a5b4fcf&oe=6004A436" alt="Profile picture" width='300px' />
        <div className="Profile-hero-details" >
          <h3>Christian Compeán</h3>
          <ul>
            <li>39 posts</li>
            <li>300 followers</li>
            <li>90 following</li>
          </ul>
        </div>
      </section>
      <MyPosts />
    </section>
  )
}