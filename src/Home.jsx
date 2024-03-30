import React from 'react'
import Avatar from './assets/ava1.png'
const Home = () => {
  return (
      <div className="home">
        <div className="left">
          <img src={Avatar} alt="image" />
        </div>
        <div className="right">
          <h2>Bienvenue</h2>
          <p>Je suis <span>TSARAVALY Allen Sarnoff</span></p>
          <h4>Un développeur front-end</h4>
        </div>
      </div>  
  )
}

export default Home