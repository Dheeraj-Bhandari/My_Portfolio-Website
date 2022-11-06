import React from "react";
import { NavigationDots } from "../components";
import SocailMedia from "../components/SocialMedia";
import "./AppWrap.scss";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocailMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
