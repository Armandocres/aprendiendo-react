// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const TwitterFollowCard = ({ formattedUsername, username, name, initialIsFollowing}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);


  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'
  const imageSRC = `https://unavatar.io/github/${username}`

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          src={imageSRC}
          alt="avatar"
          className='tw-follorCard-avatar'
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUsername'>{formattedUsername}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard;