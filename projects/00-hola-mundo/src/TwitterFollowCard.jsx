import React from 'react'

const TwitterFollowCard = ({ username, name, isFollowing}) => {
  const imageSRC = `https://unavatar.io/github/${username}`

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
          <span className='tw-followCard-infoUsername'>@{username}</span>
        </div>
      </header>

      <aside>
        <button className='tw-followCard-button'>
          seguir
        </button>
      </aside>
    </article>
  )
}

export default TwitterFollowCard;