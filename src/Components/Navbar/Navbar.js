import React from 'react'

import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <nav>
<img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
   
   <div className="buttons">
   <select name="language" id="" className='select'>
     <option value="English">English</option>
     <option value="Hindi">Hindi</option>
   </select>
   <button>sing in</button>
   </div>
    </nav>
  )
}

export default Navbar