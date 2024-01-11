import React from 'react'
import { format ,parse} from 'date-fns';
import { useState} from 'react';

function Card({image, title, publishedAt, content}) {
 const data_first = publishedAt.split(' ')[0];
  const data_second = publishedAt.split(' ')[1];

  const date = format(parse(data_first, 'dd/MM/yyyy', new Date()), 'dd MMM yyyy');
  const time = format(parse(data_second, 'HH:mm:ss', new Date()), 'HH:mm a');

  const [showFullContent, setShowFullContent] = useState(false);

  const handleSeeMoreClick = () => {
    setShowFullContent(!showFullContent);
  };
  return (
<div className={`card ${showFullContent ? 'expanded' : ''}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-details">
        <div className="date-chip">
         {date} | {time}
        </div>
        
         <h2 className="card-title">{title.length > 30 ? `${title.slice(0, 24)}...` : title}</h2>

        <p className="card-content">
          {showFullContent ? content : `${content.slice(0, 150)}...`}
        </p>
        {content.length > 200 && (
          <button className="see-more-button" onClick={handleSeeMoreClick}>
            {showFullContent ? 'See less' : 'See more...'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Card
