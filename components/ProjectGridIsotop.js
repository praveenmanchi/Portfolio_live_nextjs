"use client";

import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const ProjectGridIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-masonry-active", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <Fragment>
      <ul className="project-filter filter-btns-one justify-content-center pb-35 wow fadeInUp delay-0-2s">
        <li
          className={`c-pointer ${activeBtn("*")}`}
          onClick={handleFilterKeyChange("*")}
        >
          Show All
        </li>
        <li
          className={`c-pointer ${activeBtn("design")}`}
          onClick={handleFilterKeyChange("design")}
        >
          Web
        </li>
        <li
          className={`c-pointer ${activeBtn("branding")}`}
          onClick={handleFilterKeyChange("branding")}
        >
          Design System
        </li>
        <li
          className={`c-pointer ${activeBtn("marketing")}`}
          onClick={handleFilterKeyChange("marketing")}
        >
          Heuristic Evaluation
        </li>
        <li
          className={`c-pointer ${activeBtn("development")}`}
          onClick={handleFilterKeyChange("development")}
        >
          Usability Testing
        </li>
        <li
          className={`c-pointer ${activeBtn("apps")}`}
          onClick={handleFilterKeyChange("apps")}
        >
          Mobile Apps
        </li>
        <li
          className={`c-pointer ${activeBtn("graphics")}`}
          onClick={handleFilterKeyChange("graphics")}
        >
          Design Process
        </li>
      </ul>
      <div className="row project-masonry-active">

        <div className="col-lg-6 item branding development">
          <Link legacyBehavior href='bestornothing'>
          <div className="blog-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/Casestudies/benz/benz banner.png" alt="Project" />
            </div>
            <div className="content">
              <h3>
                  AMG Driving academy
              </h3>
              <p>
              Mockup for AMG Driving academy, a car racing event organizer is planning to build a new platform to host their upcoming car racing event. The platform aims to provide a comprehensive solution for the participants, spectators, and event organizers to engage with each other before, during, and after the event.
              </p>
              <hr />
              <div className="blog-meta mb-5">
                <div className="tag-coulds badges">
                  <Link legacyBehavior href=".#">
                    UX & UI
                  </Link>
                  <Link legacyBehavior href="#">
                    Figma
                  </Link>
                  <Link legacyBehavior href="#">
                    Web & Mobile App
                  </Link>
                  <Link legacyBehavior href="#">
                    Branding
                  </Link>
                </div>
              </div>
            </div>

          </div>
          </Link>
        </div>
        <div className="col-lg-6 item branding development">
          <Link legacyBehavior href='ATC-digitaltower'>
          <div className="blog-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="/assets/images/Casestudies/ATC/00-3.jpg" alt="Project" />
            </div>
            <div className="content">
              <h3>
              Replacing ATC with Digital Tower Interfaces
              </h3>
              <p>
              This UX case study explores the implementation of digital tower interfaces in airport operations, focusing on their pivotal role in enhancing air traffic controllers' capabilities. Through user-centric design processes, including research, wireframing, and iterative testing, the study demonstrates how intuitive interfaces improve situational awareness, streamline operations, and elevate the overall airport experience.
              </p>
              <hr />
              <div className="blog-meta mb-5">
                <div className="tag-coulds badges">
                <Link legacyBehavior href="#">
                Figma
              </Link>
              <Link legacyBehavior href="#">
                B2B tool
              </Link>
              <Link legacyBehavior href="#">
                HMI
              </Link>
              <Link legacyBehavior href="#">
                Usability
              </Link>
              <Link legacyBehavior href="#">
                VR
              </Link>
                </div>
              </div>
            </div>

          </div>
          </Link>
        </div>

        <div className="col-lg-6 item branding development">
          <Link legacyBehavior href='Ciscofoods'>
          <div className="blog-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/Casestudies/cisco/main-2.png" alt="Project" />
            </div>
            <div className="content">
              <h3>
                  Cisco Foods
              </h3>
              <p>
              UI for web application was thoughtfully designed food delivery website tailored to the unique needs and preferences of senior citizens in India. With accessibility at the forefront, the proposed solution aims to create an inclusive and seamless online experience for this often overlooked demographic.
              </p>
              <hr />
              <div className="blog-meta mb-5">
                <div className="tag-coulds badges">
                  <Link legacyBehavior href=".#">
                  Accessibility 
                  </Link>
                  <Link legacyBehavior href="#">
                    XD
                  </Link>
                  <Link legacyBehavior href="#">
                    Web Application
                  </Link>
                  <Link legacyBehavior href="#">
                    Data visualization 
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        
        <div className="col-lg-6 item branding marketing graphics">
          <Link legacyBehavior href="ABC">
          <div className="blog-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/Casestudies/abc/group2.png" alt="Project" />
            </div>
            <div className="content">
              <h3>
                ABC analytics UI Redesigning
              </h3>
              <p>
              Re-Desiging existing UI FOR better Usability for ABC Limited which is a BI Big Data Analytics Suite of digital applications. With that application they will track & monitor Analytics for manufacturing unit. We need re-redesign page is an existing Ul screen for one of the app. Study this screen and redesign it for a user.
              </p>
              <hr />
              <div className="blog-meta mb-5">
                <div className="tag-coulds badges">
                  <Link legacyBehavior href=".#">
                    UI
                  </Link>
                  <Link legacyBehavior href="#">
                  Usability
                  </Link>
                  <Link legacyBehavior href="#">
                    Web Application
                  </Link>
                  <Link legacyBehavior href="#">
                    User Testing
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-6 item branding development">
          <Link legacyBehavior href="Paysafe">
          <div className="blog-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/Casestudies/pay/Paysafe-main.png" alt="Project" />
            </div>

            <div className="content">
              <h3>
                  Paysafe
              </h3>
              <p>
              Created a seamless and user-friendly payment process for both web and mobile applications, enabling users to pay their utility bills efficiently and securely.
              </p>
              <hr />
              <div className="blog-meta mb-5">
                <div className="tag-coulds badges">
                  <Link legacyBehavior href=".#">
                    Web Design
                  </Link>
                  <Link legacyBehavior href="#">
                    Figma
                  </Link>
                  <Link legacyBehavior href="#">
                    B2C
                  </Link>
                  <Link legacyBehavior href="#">
                    Branding
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-6 item branding development">
          <Link legacyBehavior href="Instrumentcluster">
          <div className="blog-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="/assets/images/Casestudies/Instrumentcluster/instrument cluster_small.png" alt="Project" />
            </div>
            <div className="content">
              <h3>
                Instrument Cluster

              </h3>
              <p>
                Mockup UI for a collection of dials and gauges that typically sits behind the steering wheel, giving the driver a range of information about the vehicle's status
              </p>
              <hr />
              <div className="blog-meta mb-5">
                <div className="tag-coulds badges">
                  <Link legacyBehavior href=".#">
                    UI
                  </Link>
                  <Link legacyBehavior href="#">
                    XD
                  </Link>
                  <Link legacyBehavior href="#">
                    HMI
                  </Link>
                  <Link legacyBehavior href="#">
                    Usability
                  </Link>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-lg-6 item design development apps">
          <Link legacyBehavior href="Mue-Zero">
          <div className="blog-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="/assets/images/Casestudies/mue-zero/mue22.png" alt="Project" />
            </div>

            <div className="content">
              <h3>
                  Mue-zero
              </h3>
              <p>
                Created UI for learning management system is a software application for the administration, documentation, tracking, reporting, automation, and delivery of educational courses, training programs, materials or learning and development programs. The learning management system concept emerged directly from e-Learning
              </p>
              <hr />
              <div className="blog-meta mb-5">
                <div className="tag-coulds badges">
                  <Link legacyBehavior href=".#">
                    Web UI
                  </Link>
                  <Link legacyBehavior href="#">
                    XD
                  </Link>
                  <Link legacyBehavior href="#">
                    User Flow
                  </Link>
                  <Link legacyBehavior href="#">
                    Branding
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Link>
        </div>
        <div className="col-lg-6 item development graphics">
          <Link legacyBehavior href="informatica">
          <div className="blog-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="/assets/images/Casestudies/informatica/air-1.png" alt="Project" />
            </div>

            <div className="content">
              <h3>
                Inflight Entertainment System
              </h3>
              <p>
                UI for inflight entertainment, and the Touch HMI systems allow hassle-free internet access, browsing, video streaming, and more on passenger's devices.
              </p>
              <hr />
              <div className="blog-meta mb-5">
                <div className="tag-coulds badges">
                  <Link legacyBehavior href=".#">
                    HMI UI
                  </Link>
                  <Link legacyBehavior href="#">
                    XD
                  </Link>
                  <Link legacyBehavior href="#">
                    User-flow's
                  </Link>
                  <Link legacyBehavior href="#">
                    Branding
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Link>
        </div>
        {/* <div className="col-lg-6 item development graphics">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img src="assets/images/Casestudies/pay/1.jpg" alt="Project" />
              <Link legacyBehavior href="/Paysafe">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Graphics Design</span>
              <h3>
                <Link legacyBehavior href="project-details">
                  Paysafe
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item design development apps">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img
                src="assets/images/Casestudies/abc/group2.png"
                alt="Project"
              />
              <Link legacyBehavior href="/ABC">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h3>
                <Link legacyBehavior href="project-details">
                  ABC UI Redesigning
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item branding marketing graphics">
          <div className="project-item style-two wow fadeInUp delay-0-2s">
            <div className="project-image">
              <img
                src="assets/images/Casestudies/case/innns.png"
                alt="Project"
              />
              <Link legacyBehavior href="/Instrumentcluster">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Design &amp; Branding</span>
              <h3>
                <Link legacyBehavior href="project-details">
                  Instrument Cluster
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 item design marketing apps">
          <div className="project-item style-two wow fadeInUp delay-0-4s">
            <div className="project-image">
              <img src="assets/images/projects/project6.jpg" alt="Project" />
              <Link legacyBehavior href="/informatica">
                <a className="details-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="project-content">
              <span className="sub-title">Product Design</span>
              <h3>
                <Link legacyBehavior href="project-details">
                  Inflight Entertainment System
                </Link>
              </h3>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="blog-item wow fadeInUp delay-0-2s">
        <div className="image">
          <img src="assets/images/benz/benz banner.png" alt="Blog" />
        </div>
        <div className="content">
          <div className="blog-meta mb-35">
            <Link legacyBehavior className="tag" href="blog">
              Design
            </Link>
          </div>
          <h5>
            <Link legacyBehavior href="blog-details">
              Tips For Conductin See Usability Studies
            </Link>
          </h5>
          <p>
            Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
            inventore veritatis architecto beatae Sed ut perspiciatis unde omnin
            natus totam rem aperiam eaque inventore veritatis architecto beatae
            Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
            inventore veritatis architecto beatae
          </p>
          <div className="tag-coulds">
            <Link legacyBehavior href="blog">
              Design
            </Link>
            <Link legacyBehavior href="blog">
              Figma
            </Link>
            <Link legacyBehavior href="blog">
              Apps
            </Link>
            <Link legacyBehavior href="blog">
              Branding
            </Link>
          </div>
          <p></p>
          <Link legacyBehavior href="/project-details">
            <a className="details-btn">
              <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </div> */}
    </Fragment>
  );
};
export default ProjectGridIsotop;
