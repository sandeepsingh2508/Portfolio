import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin ,FaFacebook,FaYoutube} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub,BsInstagram } from "react-icons/bs";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home1">
          <p>Hi! My name is Sandeep</p>
          <br></br>
          <span>A Software Developer with a passion for learning </span>
          <span>and creating</span>
        </div>
        <div className="logo">
          <ul>
            <li>
              <Link to="https://www.linkedin.com/mynetwork/">
                <FaLinkedin id="icon" />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/i/flow/lite/verify_password">
                <AiFillTwitterCircle id="icon" />
              </Link>
            </li>
            <li>
              <Link to="https://github.com/sandeepsingh2508?tab=repositories">
                <BsGithub id="icon" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="skill">
          <h>Skills</h>
          <br />
          <p>Front-End</p>
          <span>
            HTML, CSS, JavaScript, ReactJs, NextJs, Bootstrap, Material UI ,ReactIcons,
          </span>
          <span>TailWindCSS, StyledComponents</span>
          <br />
          <p>Back-End</p>
          <span>
            NodeJs, ExpressJs, Tesseract.js, Socket.io, MySQL,PostgressSQL,
          </span>
          <span>MongoDB</span>
          <br />
          <p>Languages</p>
          <span>JavaScript, SQL, C++, Python</span>
        </div>
        <div className="footer">
          <ul>
            <li>
              <Link to='https://www.instagram.com/tanmaysinghrajput3/'><BsInstagram id="i-icon"/></Link>
            </li>
            <li>
              <Link to='https://www.youtube.com/watch?v=x7mwVn2z3Sk&t=2650s&ab_channel=PedroTech'><FaYoutube id="u-icon"/></Link>
            </li>
            <li>
              <Link to='https://www.facebook.com/'><FaFacebook id="f-icon"/></Link>
            </li>
            <li>
              <Link to='https://www.linkedin.com/mynetwork/'><FaLinkedin id="f-icon"/></Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
