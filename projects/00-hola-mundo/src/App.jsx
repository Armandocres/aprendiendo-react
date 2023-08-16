// eslint-disable-next-line no-unused-vars
import React from 'react'
import TwitterFollowCard from './TwitterFollowCard';
import './App.css'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const formatUsername = (userName) => `@${userName}` //pasar funciones como props

  const formattedUsername = (<span>@midudev</span>) //pasar elementos como props

  const user = [
    {
      userName: 'Midudev',
      name: 'Míguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'Midudev',
      name: 'Míguel Ángel Durán',
      isFollowing: false
    },
    {
      userName: 'Midudev',
      name: 'Míguel Ángel Durán',
      isFollowing: true
    }
  ]

  return (
    <div className='App'>
      {user.map(user => {
        const { userName, name, isFollowing } = user;

        return (
          <TwitterFollowCard
            key={name}
            username={userName}
            name={name}
            initialIsFollowing={isFollowing}
            formattedUsername={formattedUsername}
           />
        )
      })}
    </div>
  )
}

export default App;