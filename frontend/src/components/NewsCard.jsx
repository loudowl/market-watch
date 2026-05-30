import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
      <h2>{article.headline}</h2>
      <p><strong>Source:</strong> {article.source}</p>
      <p>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: '#0047AB' }}>Read more</a>
    </div>
  );
};

export default NewsCard;
