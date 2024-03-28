import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import ScrollTop from "@/components/ScrollTop";
import Link from "next/link";
import Image from "next/image";


// export const metadata = {
//   title: "AMG Driving Academy",
// };

export const metadata = {
  title: {
    // template: "Praveen Manchi || %s",
    default:"Abc", // a default is required when creating a template
  },
  openGraph: {
    images: ['https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/benz-og.png'],
  },
  description: "ABC Limited has a BI Big Data Analytics Suite of digital applications. With that application they will track & monitor Analytics for manufacturing unit. We need re-redesign page is an existing Ul screen for one of the app. Study this screen and redesign it for a user.",
};

const ProjectDetails = () => {
  
  return (
    <NoxfolioLayout onePageMenu={true}>
      {/* <PageBanner pageName={"Mobile Application Design"} /> */}
      {/* ProjectDetails Area start */}
      <section className="Projects-details-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="Projects-details-image mb-50 wow fadeInUp delay-0-2s">
            <Image
              src="/assets/images/Casestudies/abc/group2.png"
              alt="Project Details"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="row gap-120">
            <div className="col-lg-8">
              <div className="project-details-content wow fadeInUp delay-0-2s">
                <h3>Abc Re-Designing </h3>
                <p className="big-letter">
                ABC Limited has a BI Big Data Analytics Suite of digital applications. With that application they will track & monitor Analytics for manufacturing unit. We need re-redesign page is an existing Ul screen for one of the app. Study this screen and redesign it for a user.
                </p>
                {/* <p>
                AMG Driving academy, a car racing event organizer is planning to build a new platform to host their upcoming car racing event. The platform aims to provide a comprehensive solution for the participants, spectators, and event organizers to engage with each other before, during, and after the event.
                </p> */}
                <ul className="list-style-one two-column mt-50 mb-40">
                  <li>UX &amp; UI Designing</li>
                  <li>Branding</li>
                  <li>Prototype </li>
                  <li>HCI</li>
                  {/* <li>Mobile Apps Design</li>
                  <li>System &amp; Guide</li>
                  <li>Graphics Design</li>
                  <li>Content Management</li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp delay-0-4s">
              <div
                className="project-details-info rmb-55"
                style={{
                  backgroundImage:
                    "url(/assets/images/benz/1.png)",
                }}
              >
                <div className="pd-info-item">
                  <span>Category</span>
                  <h5>Web, Redesigning</h5>
                </div>
                <div className="pd-info-item">
                  <span>Clients</span>
                  <h5>Confidential</h5>
                </div>
                <div className="pd-info-item">
                  <span>Tools Used</span>
                  <div style={{ display: "flex", gap: "30px" }}>
                    {/* <img src="assets/images/skills/skill1.svg" alt="Tool Icon 1" width="30" height="30" /> */}
                    <img src="assets/images/skills/skill2.svg" alt="Tool Icon 2" width="30" height="30" />
                    <img src="assets/images/skills/skill3.svg" alt="Tool Icon 3" width="30" height="30" />
                    {/* <img src="assets/images/skills/skill4.svg" alt="Tool Icon 4" width="30" height="30" />
                    <img src="assets/images/skills/skill5.svg" alt="Tool Icon 5" width="30" height="30" /> */}
                  </div>
                </div>
                <div className="pd-info-item">
                  <span>Published</span>
                  <h5>September 25, 2021</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="project-bottom-content mb-50 wow fadeInUp delay-0-2s">
            <h3 className="title mb-25">Project Summery</h3>
            <p>
            TO RE-DESIGN EXISTING UI FOR BETTER EXPERIENCE of ABC Limited has a BI Big Data Analytics Suite of digital applications. With that application they will track & monitor Analytics for manufacturing unit. We need re-redesign page is an existing Ul screen for one of the app. Study this screen and redesign it for a user.
            </p>
          </div>
          <div className="row pb-15">
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <Image
                  src="/assets/images/Casestudies/abc/abc-1.png"
                  alt="Project Middle"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iframe mb-30 wow fadeInUp delay-0-6s">
                <iframe
                  width="100%"
                  height="700"
                  src="https://miro.com/app/live-embed/uXjVO1zGS5k=/?moveToViewport=-559,-1573,7508,9772"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <Image
                  src="/assets/images/Casestudies/abc/abc-2.png"
                  alt="Project Middle"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iframe mb-30 wow fadeInUp delay-0-6s">
                <iframe
                  width="100%"
                  height="700"
                  src="https://miro.com/app/live-embed/uXjVO1zGS5k=/?moveToViewport=-559,-1573,7508,9772"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <Image
                  src="/assets/images/Casestudies/abc/abc-3.png"
                  alt="Project Middle"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iframe mb-30 wow fadeInUp delay-0-6s">
                <iframe
                  width="100%"
                  height="700"
                  src="https://miro.com/app/live-embed/uXjVO1zGS5k=/?moveToViewport=-559,-1573,7508,9772"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <Image
                  src="/assets/images/Casestudies/abc/abc-4.png"
                  alt="Project Middle"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="iframe mb-30 wow fadeInUp delay-0-6s">
                <iframe
                  width="100%"
                  height="700"
                  src="https://xd.adobe.com/embed/9977cdad-88d5-40e9-b08f-8a58ccc156cf-cc24/"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
          </div>
          
          {/* <div className="tag-share py-30 wow fadeInUp delay-0-2s">
            <div className="item">
              <b>Tags</b>
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
              </div>
            </div>
            <div className="item">
              <b>Share</b>
              <div className="social-style-one">
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
              </div>
            </div>
          </div> */}
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
      {/* Project Details Area end */}
      {/* Related Projects Area start */}
      {/* <section className="related-Projects-area pb-70 rpb-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <h2>Related Projects</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-2s">
                <div className="project-image before-after-none">
                  <img
                    src="assets/images/Projects/related-project1.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Graphics Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Brand Identity Design
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-4s">
                <div className="project-image before-after-none">
                  <img
                    src="assets/images/Projects/related-project2.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Product Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Mobile Apps Design
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item style-two wow fadeInUp delay-0-6s">
                <div className="project-image before-after-none">
                  <img
                    src="assets/images/Projects/related-project3.jpg"
                    alt="Project"
                  />
                </div>
                <div className="project-content">
                  <span className="sub-title">Product Design</span>
                  <h4>
                    <Link legacyBehavior href="/project-details">
                      Dashboard Development
                    </Link>
                  </h4>
                </div>
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
      </section> */}
      <ScrollTop />
    </NoxfolioLayout>
  );
};
export default ProjectDetails;
