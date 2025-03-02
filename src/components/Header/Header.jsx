import React from "react";
import "./header.css";
import HeaderTitle from "../../ui/HeaderTitle";
import profile from "../../assets/93412656822.png";
import Codeblock from "../../ui/CodeBlock/Codeblock";
import Fact from "../../ui/Facts/Fact";
import SocialHandles from "../../ui/SocialHandles/SocialHandles";
import BreathCircle from "../../ui/BreathCircle"

const Header = () => {
  const code = `
    const developer = {
    firstName:"Prince",
    lastName:"Uche",
    age:23,
    hobby:repeat = () => {
    // eat();
    // sleep();
    // repeat();
  }}
  `;
  return (
    <header id="header">
      <BreathCircle />
      <div className="section__wrapper">
        <div className="grid upper">
          <div className="column">
            <HeaderTitle />
          </div>
          <div className="column">
            <img src={profile} alt="" className="profile__photo" />
          </div>
        </div>
        <div className="card grid lower">
          <Codeblock language={"javascript"} code={code} />
          <div>
            <p className="text__muted description">
              I'm a software engineer with a passion for creating user-friendly
              applications. I'm a software engineer with a passion for creating
              user-friendly applications. I'm a software engineer with a passion
              for creating user-friendly applications.
            </p>
            <Fact />
            <SocialHandles />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
