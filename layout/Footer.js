import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;

    case 2:
      return <Footer2 />;

    default:
      return <Footer1 />;
  }
};

export default Footer;

const Footer1 = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer className="main-footer footer-two pt-75 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3 col-md-5">
            <div className="footer-widget widget_logo text-center text-md-start wow fadeInUp delay-0-2s">
              <div className="footer-logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logos/logo.svg" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-8 col-md-7">
            <div className="footer-widget widget_nav_menu me-0 wow fadeInUp delay-0-4s">
              <ul>
                <li>
                  <Link legacyBehavior href="services">
                    Service
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="services#pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="about#faqs">
                    Faqs
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="blog">
                    News
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-8 col-md-7">
            <div className="footer-widget widget_nav_menu me-0 wow fadeInUp delay-0-4s">
              <ul>
                <li>
                  <Link legacyBehavior href="https://uxai.designboard.club/">
                    UXAI
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="https://www.designboard.club/">
                    Designboard.club
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/resume">
                    Resume
                  </Link>
                </li>
                {/* <li>
                  <Link legacyBehavior href="blog">
                    News
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="contact">
                    Contact
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <hr className="mb-40" />
          </div>
          <div className="col-lg-3 col-md-5">
              <div className="footer-widget widget_contact_info wow fadeInUp delay-0-6s">
                <h6 className="footer-title">Contact Me</h6>
                <ul>
                  {/* <li>
                    <i className="far fa-map-marker-alt" /> 55 Main Street, 2nd
                    block, New York City
                  </li> */}
                  <li>
                    <i className="far fa-envelope" />{" "}
                    <a href="mailto:Praveenmanchi.work@proton.me">Praveenmanchi.work@proton.me</a>
                  </li>
                  <li>
                    <i className="far fa-phone" />{" "}
                    <a href="callto:91 8297987394">+91 8297987394</a>
                  </li>
                </ul>
              </div>
            </div>
          <div className="col-xl-4 col-lg-5">
            <div className="footer-widget widget_social text-center text-lg-end wow fadeInUp delay-0-4s">
              <div className="social-flow">
                <h4>Follow :</h4>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fab fa-GitHub-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-dribble-p" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <hr className="mt-0" />
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-10 pb-15">
        <div className="container">
          <div className="copyright-text text-center">
            <p>
              Copyright @{date},{" "}
              <Link legacyBehavior href="/">
                Praveen Manchi
              </Link>{" "}
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer2 = () => {
  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <footer className="main-footer footer-two pt-75 rel z-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3 col-md-5">
            <div className="footer-widget widget_logo text-center text-md-start wow fadeInUp delay-0-2s">
              <div className="footer-logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/logos/logo.png" alt="Logo" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="footer-widget widget_nav_menu me-0 wow fadeInUp delay-0-4s">
              <ul>
                <li>
                  <Link legacyBehavior href="services">
                    Service
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="projects">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="services#pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="about#faqs">
                    Faqs
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="blog">
                    News
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <hr className="mb-40" />
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="footer-widget widget_text text-center text-lg-start wow fadeInUp delay-0-2s">
              <div className="text pb-20">
                These Terms will be applied fully and affect to your use of this
                Website. By using this Website, you agreed to accept all terms
                and conditions written in here.
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="footer-widget widget_social text-center text-lg-end wow fadeInUp delay-0-4s">
              <div className="social-flow">
                <h4>Follow :</h4>
                <div className="social-style-one">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <hr className="mt-0" />
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-10 pb-15">
        <div className="container">
          <div className="copyright-text text-center">
            <p>
              Copyright @{date},{" "}
              <Link legacyBehavior href="/">
                Noxfolio
              </Link>{" "}
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
