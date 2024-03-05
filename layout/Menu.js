import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';
import { track } from '@vercel/analytics';


const DropdownBtn = () => (
  <div className="dropdown-btn">
    <span className="fas fa-chevron-down" />
  </div>
);
const MultiMenu = () => {
  return (
    <ul className="navigation clearfix">
      <li className="dropdown">
        <a href="#">Home</a>
        <ul>
          <li className="dropdown">
            <a href="#">MultiPage</a>
            <ul>
              <li>
                <Link href="/">Home One</Link>
              </li>
              <li>
                <Link href="/index2">Home Two</Link>
              </li>
            </ul>
            <DropdownBtn />
          </li>
          <li className="dropdown">
            <a href="#">OnePage</a>
            <ul>
              <li>
                <Link href="/indexonepage">Home One</Link>
              </li>
              <li>
                <Link href="/index2onepage">Home Two</Link>
              </li>
            </ul>
            <DropdownBtn />
          </li>
        </ul>
        <DropdownBtn />
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
      <li>
        <Link href="/services">services</Link>
      </li>
      <li className="dropdown">
        <a href="#">projects</a>
        <ul>
          <li>
            <Link href="/projects">project Grid</Link>
          </li>
          <li>
            <Link href="/projects-masonry">projects masonry</Link>
          </li>
          <li>
            <Link href="/project-details">projects details</Link>
          </li>
        </ul>
        <DropdownBtn />
      </li>
      <li className="dropdown">
        <a href="#">blog</a>
        <ul>
          <li>
            <Link href="/blog">blog standard</Link>
          </li>
          <li>
            <Link href="/blog-details">blog details</Link>
          </li>
        </ul>
        <DropdownBtn />
      </li>
      <li className="dropdown">
        <a href="#">pages</a>
        <ul>
          <li>
            <Link href="/404">Error Page</Link>
          </li>
        </ul>
        <DropdownBtn />
      </li>
      <li>
        <Link href="contact">Contact</Link>
      </li>
    </ul>
  );
};
export default MultiMenu;

export const OnePageMenu = () => {
  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="/" onClick={() => track("Home")}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={() => track("About")}>
          about Me
        </a>
      </li>
      {/* <li>
        <a href="#resume" onClick={() => track("Resume")}>Resume</a>
      </li> */}
      {/* <li>
        <a href="#services" onClick={() => trackEvent("Services")}>services</a>
      </li> */}
      {/* <li>
        <a href="#skills" onClick={() => track("Skills")}>skills</a>
      </li> */}
      <li>
        <a href="/Casestudies" onClick={() => track("Case Studies")}>
          Casestudies
        </a>
      </li>
      <li>
        <a href="/Resume" onClick={() => track("Resume")}>
          Resume
        </a>
      </li>
      
      <li>
        <a href="https://designboard.club/" onClick={() => track("designboard")}>
        Designboard.club ↗ 
        </a>
      </li>
      
      {/* <li>
        <div className="project-btn text-center wow fadeInUp delay-0-2s">
          <Link legacyBehavior href="/Casestudies">
            <a className="theme-btn">
              Designboard.club <i className="far fa-arrow-right" />
            </a>
          </Link>
        </div>
      </li> */}
      {/* <li>
        <a href="/Photography" onClick={() => track("Photography")}>Photography</a>
      </li> */}
      {/* <li>
        <a href="#blog" onClick={() => trackEvent("Blog")}>blog</a>
      </li> */}
      {/* <li>
        <a href="#Footer" onClick={() => trackEvent("Contact")}>Contact</a>
      </li> */}
    </ul>
  );
};
