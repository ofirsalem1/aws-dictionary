import React, { useRef } from 'react';

const NavBar = () => {
  const mySidenav: any = useRef();
  console.log(mySidenav.current);

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
        <span>About</span>
        <span>Services</span>
        <span>Clients</span>
        <span>Contact</span>
      </div>
      {/* // Use any element to open the sidenav */}
      <span onClick={openNav}>open</span>
      {/* // Add all page content inside this div if you want the side nav to push page content to the
      right (not used if you only want the sidenav to sit on top of the page */}
    </div>
  );
};

export default NavBar;
