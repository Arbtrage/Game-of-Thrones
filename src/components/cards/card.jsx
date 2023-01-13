import React from 'react'

const cardlist = ({charac}) => {
    const { id, fullName, title, family, image, imageUrl}=charac;
  return (
    <div>
        <img src={imageUrl} alt={image} />
        <h2>{id} {fullName}</h2>
        <h3>{title}</h3>
        <h4>{family}</h4>

    </div>
  )
}

export default cardlist