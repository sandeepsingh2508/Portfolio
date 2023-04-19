import React from "react";
import "./Project.css";
import { ProjectList } from "./ProjectList";

import { useNavigate} from "react-router-dom";
const Project = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="project">
        <span>My Personal Projects</span>
        <br></br>
        <div className="box">
          {ProjectList.map((value, id) => {
            return (
              <div className="box1" onClick={()=>{navigate("/projectpage/"+id)}}>
                <img src={value.image} alt="" />
                <p>{value.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      
    </>
  );
};

export default Project;
