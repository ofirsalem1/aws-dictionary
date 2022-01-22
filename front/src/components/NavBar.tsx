import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const mySidenav: any = useRef();
  const navigate = useNavigate();
  /* Set the width of the side navigation to 250px */
  const openNav = () => {
    mySidenav.current.style.width = '250px';
  };
  /* Set the width of the side navigation to 0 */
  const closeNav = () => {
    mySidenav.current.style.width = '0';
  };
  return (
    <div>
      <div ref={mySidenav} id="mySidenav" className="sidenav">
        <span className="closebtn" onClick={closeNav}>
          &times;
        </span>
        <span
          onClick={() => {
            navigate('/');
            closeNav();
          }}
        >
          Home
        </span>
        <span
          onClick={() => {
            navigate('/word/welcome');
            closeNav();
          }}
        >
          Word
        </span>

        <span
          onClick={() => {
            navigate('/random-word-pos/conjunctions');
            closeNav();
          }}
        >
          Random Word Pos
        </span>
        <span
          onClick={() => {
            navigate('/random-word-pos-start-with');
            closeNav();
          }}
        >
          Random Word Pos With Letter
        </span>
      </div>
      {/* // Use any element to open the sidenav */}
      <span className="open-nav" onClick={openNav}>
        ☰
      </span>
      {/* // Add all page content inside this div if you want the side nav to push page content to the
      right (not used if you only want the sidenav to sit on top of the page */}
    </div>
  );
};

export default NavBar;
