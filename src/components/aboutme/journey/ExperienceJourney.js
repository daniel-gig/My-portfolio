import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        {/* <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link> */}
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="09/2022 - 11/2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Software Developer
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Smart Monkeys, Inc
          </h6>
          <p>• Resolved several UX/UI issues on the ISAAC platform collaborating with a peer developer and a UX/UI designer.</p>
          <p>• Participated in implementing web hooks integrations feature to the ISAAC by building UX/UI with API requests integrated.</p>
          <p>• Contributed to improving state management on the ISAAC front-end.</p>
          <p>• Performed ISAAC UX reviews with all the teammates together on every work sprint, which is 2 weeks.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="09/2021 - 09/2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Application Developer
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Rematic Tokens
          </h6>
          <p>• Created a robust infrastructure of a standard web3 application with web3 authentication integrated by MERN stack.</p>
          <p>• Participated in developing a decentralized voting system as a core developer responsible for building UI and RESTful APIs by MERN stack .</p>
          <p>• Built the company's business management platform collaborating with Smart contract developers.</p>
          <p>• Participated in several elections discussing the company's strategy.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="05/2020 - 08/2021"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Full-stack JavaScript Developer
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Upwork, Toptal
          </h6>
          <p>• Participated in meetings with clients to understand requirements of their projects</p>
          <p>• Involved in building UX/UI of a big online education platform which has more than 10,000 users</p>
          <p>• Built several e-commerce and real estate services with Next.js</p>
          <p>• Played an active role as a core front-end developer in building an enormous software developer solutions platform built with MERN stack</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="03/2015 - 04/2020"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Senior Front-end Developer
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Wonderment Apps   
          </h6>
          <p>• Built various front-end prototypes and then converted them into real websites.</p>
          <p>• Diagnosed and troubleshot diﬀerent websites of the company’s clients by deploying up-to-dated knowledge of modern technologies in industry.</p>
          <p>• Regularly performed code reviews and provided feedback to peers and junior engineers mainly in design patterns and algorithmic logics.</p>
          <p>• Developed documentation to teach new interns and team members the best practices in React and awesome one liners in JavaScript.</p>
          <p>• Coached 2 interns in pixel-perfect design and front-end web development with React .</p>
          <p>• Participated in hiring processes as a technical interview to assess the candidates' skills.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="10/2014 - 02/2015"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
          Web Development Intern
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
          Wonderment Core Team 
          </h6>
          <p>• Translated designs into HTML5, CSS3, and JavaScript codes.</p>
          <p>• Dived into learning modern JavaScript libraries and frameworks and their design patterns.</p>
          <p>• Developed Component-Oriented codebase in React.</p>
          <p>• Worked closely with designers, developers, and other cross-functional teams to drive into innovation and maximize conversations.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
