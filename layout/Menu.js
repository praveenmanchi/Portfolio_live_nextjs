import Link from "next/link";
import { Analytics } from '@vercel/analytics/react';


export const OnePageMenu = () => {
  const trackClick = (event, href) => {
    // Track the click event here
    console.log(`Clicked on ${href}`);
  };

  return (
    <ul className="navigation onepage clearfix">
      <li>
        <a href="/" onClick={(event) => trackClick(event, "/")}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" onClick={(event) => trackClick(event, "#about")}>
          about
        </a>
      </li>
      <li>
        <a href="#resume" onClick={(event) => trackClick(event, "#resume")}>
          Resume
        </a>
      </li>
      {/* <li>
        <a href="#services" onClick={(event) => trackClick(event, "#services")}>
          services
        </a>
      </li> */}
      <li>
        <a href="#skills" onClick={(event) => trackClick(event, "#skills")}>
          skills
        </a>
      </li>
      <li>
        <a href="/Casestudies" onClick={(event) => trackClick(event, "/Casestudies")}>
          Casestudies
        </a>
      </li>
      {/* <li>
        <a href="#blog" onClick={(event) => trackClick(event, "#blog")}>
          blog
        </a>
      </li> */}
      {/* <li>
        <a href="#Footer" onClick={(event) => trackClick(event, "#Footer")}>
          Contact
        </a>
      </li> */}
    </ul>
  );
};
