import React from 'react'
import TwitterFollowCard from './TwitterFollowCard';
import './App.css'

const App = () => {
  const formatUsername = (userName) => `@${userName}` //pasar funciones como props

  const formattedUsername = (<span>@midudev</span>) //pasar elementos como props

  return (
    <div className='App'>
      <TwitterFollowCard username='Midudev' name='ArmandoCres' formattedUsername={formattedUsername} initialIsFollowing={true} />
      <TwitterFollowCard username='Midudev' name='ArmandoCres' formattedUsername={formattedUsername} />
      <TwitterFollowCard username='Midudev' name='ArmandoCres' formattedUsername={formattedUsername} />
      <TwitterFollowCard username='Midudev' name='ArmandoCres' formattedUsername={formattedUsername} initialIsFollowing={true} />
    </div>
  )
}

export default App;