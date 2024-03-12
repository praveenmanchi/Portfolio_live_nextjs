import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

export const metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <NoxfolioLayout onePageMenu={true}>
      {/* <PageBanner pageName={"Resume"} /> */}
      {/* Contact Page Area start */}
      <section className="page-banner-area pt-200 rpt-140 pb-100 rpb-60 rel z-1 text-center">
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
              {/* <span className="sub-title mb-15">Latest Works</span> */}
              <h2>
                Discover My <span>Resume</span>
              </h2>
            </div>
          </div>
        </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="contact-page-content rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  {/* <span className="sub-title mb-15">Resume</span> */}
                  <h2>
                    You have openings <span> Let's Connect </span>
                  </h2>
                  {/* <p>
                    Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
                    inventore veritatis
                  </p> */}
                </div>
                {/* <h6>Contact Info</h6> */}
                <div className="widget_contact_info mb-35">
                  <ul>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:Praveenmanchi.work@proton.me">
                        Praveenmanchi.work@proton.me
                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <a href="callto:91 8297987394">+91 8297987394</a>
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                <Link legacyBehavior href="https://s466bgvk1segjdyf.public.blob.vercel-storage.com/Praveen_UX:UI-eOllNt4bdoNyGMRabZsjlv1tFIstLS.pdf">
                  <a className="theme-btn">
                    Download Resume <i className="far fa-angle-right" />
                  </a>
                </Link>
                {/* <Link legacyBehavior href="/contact">
                  <a className="read-more">
                    Download Resume <i className="far fa-angle-right" />
                  </a>
                </Link> */}
              </div>

                {/* <h5>Follow Me</h5>
                <div className="social-style-one mt-10">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div> */}
              </div>
              
            </div>
            
            <div className="col-lg-8">
              <div className="iframe mb-30 wow fadeInUp delay-0-6s">
                <iframe
                  src="https://drive.google.com/file/d/1TmbPPQwjPawpJsCBpC8AbrAgxBE850_E/preview"
                  width="800"
                  height="1000"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* Contact Page Area end */}
      {/* Location Map Area Start */}
      {/* <div className="contact-page-map pb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container">
          <div className="our-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd"
              style={{ border: 0, width: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div> */}
    </NoxfolioLayout>
  );
};
export default page;
