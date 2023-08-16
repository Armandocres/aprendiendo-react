import React from 'react'
import TwitterFollowCard from './TwitterFollowCard';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <TwitterFollowCard username='Midudev' name='ArmandoCres'/>
      <TwitterFollowCard username='Midudev' name='ArmandoCres'/>
      <TwitterFollowCard username='Midudev' name='ArmandoCres'/>
    </div>
  )
}

export default App;