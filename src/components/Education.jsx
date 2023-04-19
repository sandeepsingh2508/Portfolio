import React from "react";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import {GiAchievement} from 'react-icons/gi'
import {GrCertificate} from 'react-icons/gr'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2019 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaGraduationCap />}
        >
          <h3 className="vertical-timeline-element-title">
            My Bachelor Degree
          </h3>
          <h4 className="vertical-timeline-element-subtitle">GKV Haridwar</h4>
          <p>Bachelor of Technology , Computer Science and Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="08/2022 - 12/2022"
          iconStyle={{ background: "rgb(122, 150, 243)", color: "#fff" }}
          icon={<GiAchievement />}
        >
          <h2 className="vertical-timeline-element-title">Achievements</h2>
          <h5 className="vertical-timeline-element-subtitle">
            Programming Skill
          </h5>
          <p>
            Rated 5 star in problem solving, C++ on Hackerrank and solved more
            than 300 questions on Leetcode, Hackerrank , gfg
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="12/2021 - 03/2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<GrCertificate />}
        >
          <h2 className="vertical-timeline-element-title">
           Certificates
          </h2>
          <h5 className="vertical-timeline-element-subtitle">HTML, CSS, AND JAVASCRIPT FOR Full Stack DEVELOPER
|| Udemy 
</h5>
          <p>The course emphasizes hands-on learning, with practical exercises</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<MdWork/>}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Education;
