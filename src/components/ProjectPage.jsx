import React from "react";
import { Link } from "react-router-dom";
import {BsGithub} from 'react-icons/bs'
import "./page.css";
import { useParams } from "react-router-dom";
import { ProjectList } from "./ProjectList";

const ProjectPage = () => {
    const {id}=useParams()
    const project=ProjectList[id]
  return (
    <>
    <div className="m-page">
      <span>{project.name}</span>
      <div className="page">
        <img
          src={project.image}
          alt=""
        />
        <p>
         <b>Skills:</b> <span>{project.skills}</span>
        </p>
      </div>
      
      <Link to={project.link}><BsGithub id="git-icons" /></Link>
    </div>
    </>
  );
};

export default ProjectPage;
