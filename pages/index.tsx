import React, { useState, useEffect } from "react";
import avatarImage from "../images/avatar-svgrepo-com.svg";
import TypeWriter from "../components/Typewriter";
import Describe from "../components/describe";
import Skills from "../components/skills";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="homepage-container">
      <div className="home-page-div">
        <img
          src={avatarImage.src}
          className="home-page-avatar"
          alt="avatar"
        ></img>
        <h1 className="home-page-title">AntiCode</h1>
        <span className="home-page-message">
          <TypeWriter
            text="Full-Stack Developer, Build your digital future."
            speed={150}
          />
        </span>
      </div>
      <Describe />
      <Skills />
      <Projects />
    </div>
  );
}
