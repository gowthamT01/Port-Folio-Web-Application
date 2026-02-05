import { useState } from 'react'

import Profile from './Profile'
import NavBar from './NavBar'
import About from './About'
import TechnicalSkills from './TechnicalSkills'
import Contact from './Contact'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='home-page'>

     <NavBar/>
     <Profile/>
     <About/>
     <TechnicalSkills/>
     <Contact/>
     </div>
    </>
  )
}

export default Home
