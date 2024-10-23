import React from 'react';
import './Post.css';
// import CommentSection from '../CommentSection';

function Post({ post }) {
  return (
    <div className="post">
      <h2>{post.user}</h2>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {post.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <img src={post.imageUrl} alt="Drink" />
      <button className="edit-button">Editar</button>
{/* 
      <CommentSection comments={post.comments} /> */}
    </div>
  );
}

export default Post;
