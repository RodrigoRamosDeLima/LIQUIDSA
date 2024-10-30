// Post.js
import React, { useState } from 'react';
import './Post.css';
import CommentSection from './CommentSection/CommentSection';

function Post({ post }) {
  const [likes, setLikes] = useState(0); // Estado para contar os likes
  const [liked, setLiked] = useState(false); // Estado para marcar se o post foi curtido

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <div className="post">
      <h2>{post.user}</h2>
      <img src={post.imageUrl} alt="Drink" />
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {post.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button className="edit-button">Editar</button>
      
      {/* Botão de like */}
      <div className="like-section">
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
          {liked ? '❤️' : '🤍'} Curtir
        </button>
        <span>{likes} curtidas</span>
      </div>

      {/* Seção de comentários */}
      <CommentSection comments={post.comments} />
    </div>
  );
}

export default Post;
