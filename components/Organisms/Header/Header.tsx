import React, { useState } from "react";
import  Link  from "next/link";

import MainHeader from "components/Atoms/MainHeader";
import NavLinks from "components/Atoms/NavLinks";
import SideDrawer from "components/Atoms/SideDrawer";
// import Backdrop from "components/Atoms/Backdrop";

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <div>
      {/* {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} zIndex={20}/>} */}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link href="/"><a href="#">PBH<span className="large"><span className="heart">❤</span></span> <span className="small heart">❤</span></a></Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        
      </MainHeader>
    </div>
  );
};

export default MainNavigation;