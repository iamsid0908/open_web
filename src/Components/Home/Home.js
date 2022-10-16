import React from 'react'
import "./Home.css"
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='home'>
        <ul className='home-ul'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/skill'><li>Skills</li></Link>
            <Link to='/experience'><li>Experience</li></Link>
            <Link to='/project'><li>Project</li></Link>
            
        </ul>
        <div className='name'>
          <h1>Hello, I am Siddharth Chandrakar</h1>
          <p>FrontEnd Developer</p>
          <a href="https://drive.google.com/file/d/1CovjDX4Xy-sEKJrS6Gmr20_jyvr7OmDD/view"><button className='btn'>Download Resume</button></a>

        </div>
        </div>
      
    </div>
  )
}

export default Home
