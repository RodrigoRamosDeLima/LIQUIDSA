import React from 'react';
import Post from '../PostContent/Post';
import './Feed.css';

function Feed() {
  const posts = [
    {
      id: 1,
      user: "RODRIGO",
      title: "SUPERB COQUETEL: Um drink de cerveja amanteigada.",
      description: "Aqui em casa temos a tradição de assistir ao Masterchef...",
      ingredients: [
        "1 colher de sopa de geleia de goiaba",
        "1 colher de sopa de açúcar",
        "60 ml de água",
        "60 ml de conhaque",
        "30 ml de rum",
        "½ limão",
        "2 fatias de laranja"
      ],
      imageUrl: "https://via.placeholder.com/350x350"
    },
    {
      id: 2,
      user: "RODRIGO",
      title: "SUPERB COQUETEL: Um drink de cerveja amanteigada.",
      description: "Aqui em casa temos a tradição de assistir ao Masterchef...",
      ingredients: [
        "1 colher de sopa de geleia de goiaba",
        "1 colher de sopa de açúcar",
        "60 ml de água",
        "60 ml de conhaque",
        "30 ml de rum",
        "½ limão",
        "2 fatias de laranja"
      ],
      imageUrl: "https://via.placeholder.com/350x350"
    },
    {
      id: 3,
      user: "RODRIGO",
      title: "SUPERB COQUETEL: Um drink de cerveja amanteigada.",
      description: "Aqui em casa temos a tradição de assistir ao Masterchef...",
      ingredients: [
        "1 colher de sopa de geleia de goiaba",
        "1 colher de sopa de açúcar",
        "60 ml de água",
        "60 ml de conhaque",
        "30 ml de rum",
        "½ limão",
        "2 fatias de laranja"
      ],
      imageUrl: "https://via.placeholder.com/350x350"
    },
    {
      id: 4,
      user: "RODRIGO",
      title: "SUPERB COQUETEL: Um drink de cerveja amanteigada.",
      description: "Aqui em casa temos a tradição de assistir ao Masterchef...",
      ingredients: [
        "1 colher de sopa de geleia de goiaba",
        "1 colher de sopa de açúcar",
        "60 ml de água",
        "60 ml de conhaque",
        "30 ml de rum",
        "½ limão",
        "2 fatias de laranja"
      ],
      imageUrl: "https://via.placeholder.com/350x350"
    },
    {
      id: 5,
      user: "RODRIGO",
      title: "SUPERB COQUETEL: Um drink de cerveja amanteigada.",
      description: "Aqui em casa temos a tradição de assistir ao Masterchef...",
      ingredients: [
        "1 colher de sopa de geleia de goiaba",
        "1 colher de sopa de açúcar",
        "60 ml de água",
        "60 ml de conhaque",
        "30 ml de rum",
        "½ limão",
        "2 fatias de laranja"
      ],
      imageUrl: "https://via.placeholder.com/350x350"
    }
  ];

  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
