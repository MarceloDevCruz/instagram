import React from 'react'

// Bootstrap icons
import {
  BsHouseDoor, BsPlusCircle,
  BsPerson, BsArrowRightCircle,
  BsChevronRight
} from 'react-icons/bs'

const Sidebar = () => {

  return (
    <section className="sidebar">
      <div className="sidebar__button-container">
      </div>
      <nav className="sidebar__container">
        <ul className="sidebar__list">
          <button><li className="sidebar__items sidebar__items--home"><BsHouseDoor />Home</li></button>
          <button><li className="sidebar__items sidebar__items--post"><BsPlusCircle />Create Post</li></button>
          <button><li className="sidebar__items sidebar__items--edit"><BsPerson />Edit Profile</li></button>
          <button><li className="sidebar__items sidebar__items--logout"><BsArrowRightCircle />Logout</li></button>
        </ul>
      </nav>
      <div className="sidebar__footer">
        <p className="sidebar__paragraphy">UnsplashGram ©</p>
      </div>
    </section>
  )
}

export default Sidebar