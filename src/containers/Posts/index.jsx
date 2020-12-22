import React from 'react';
import './styles.css';
export default function Post() {
  return (
    <article className="Post" >
      <div className="Post-user" >
        <img src="https://www.latercera.com/resizer/bPal4KTUs2d-re2EUoeZCLD0vPw=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/MLSBMQTCURCGXC6NLHCCZ3G7W4.jpg" alt="User profile picture" width="100px" />
        <p>Miku Hatsune</p>
      </div>
      <div className="Post-body" >
        <h2>Que buena experiencia nos regaló...</h2>
        <img src="https://pbs.twimg.com/media/EMyCXf1U8AEnYIF.jpg" alt="optional image" width="600px" />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className="Post-options" >
        <button className="Post-options-like" >Like</button>
      </div>
    </article>
  )
}