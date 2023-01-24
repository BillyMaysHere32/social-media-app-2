import React from 'react'
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
// import { SiPug } from "react-icons/si";
// import { DiGit } from "react-icons/di";
// import { FaJava } from "react-icons/fa";

import { Row } from 'react-bootstrap'

export default function Skills() {
  return (
    <Row xs={3}  className="d-flex flex-row justify-content-center g-5">
        <div className="icon"><FaHtml5 /><div className="icon-text">HTML</div></div>
        <div className="icon"><DiCss3 /><div className="icon-text">CSS</div></div>
        <div className="icon"><FaJsSquare /><div className="icon-text">JS</div></div>

        <div className="icon"><FaNode /><div className="icon-text">NODE</div></div>
        <div className="icon"><FaReact /><div className="icon-text">REACT</div></div>
        <div className="icon"><SiExpress /><div className="icon-text">EXPRESS</div></div>

        <div className="icon"><SiMongodb /><div className="icon-text">MONGODB</div></div>
        <div className="icon"><SiRedux /><div className="icon-text">REDUX</div></div>
        <div className="icon"><SiTypescript /><div className="icon-text">TS</div></div>
        
        <div className="icon"><SiJest /><div className="icon-text">JEST</div></div>
        <div className="icon"><FaBootstrap /><div className="icon-text">BOOTSTRAP</div></div>
        <div className="icon"><FaGithub /><div className="icon-text">GITHUB</div></div>
        

    </Row>
  )
}