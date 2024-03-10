import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import ScrollTop from "@/components/ScrollTop";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: {
    template: "Praveen Manchi || %s",
    default: "Praveen Manchi || Cisco Foods",
  },
  openGraph: {
    images: [
      "https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/benz-og.png",
    ],
  },
  description:
    "AMG Driving academy, a car racing event organizer is planning to build a new platform to host their upcoming car racing event. The platform aims to provide a comprehensive solution for the participants, spectators, and event organizers to engage with each other before, during, and after the event.",
};

const ProjectDetails = () => {
  return (
    <NoxfolioLayout onePageMenu={true}>
      <section className="Projects-details-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="Projects-details-image mb-50 wow fadeInUp delay-0-2s">
            <Image
              src="/assets/images/Casestudies/cisco/main.png"
              alt="Project Details"
              width={1500}
              height={600}
              className="w-full h-auto" // Add these classes
            />
          </div>
          <div className="row gap-120">
            <div className="col-lg-8">
              <div className="project-details-content wow fadeInUp delay-0-2s">
                <h3>Food Delivery Website for the senior citizens</h3>
                <p className="big-letter">
                showcases a thoughtfully designed food delivery website tailored to the unique needs and preferences of senior citizens in India. With accessibility at the forefront, the proposed solution aims to create an inclusive and seamless online experience for this often overlooked demographic.
                </p>
                <p>
                Through meticulous research and user understanding, the presentation delves into the challenges faced by seniors when navigating digital platforms, such as vision, hearing, and motor capability limitations. It explores creative solutions to address these barriers, ensuring that the website is not only functional but also intuitive and enjoyable to use.
                </p>
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
                  backgroundImage: "url(/assets/Casestudies/cisco/home-1.png",
                }}
              >
                <div className="pd-info-item">
                  <span>Category</span>
                  <h5>Web UI Design</h5>
                </div>
                <div className="pd-info-item">
                  <span>Clients</span>
                  <h5>Ciscofoods</h5>
                </div>
                <div className="pd-info-item">
                  <span>Tools Used</span>
                  <div style={{ display: "flex", gap: "30px" }}>
                    
                    <img
                      src="assets/images/skills/skill2.svg"
                      alt="Tool Icon 2"
                      width="30"
                      height="30"
                    />
                    <img
                      src="assets/images/skills/skill3.svg"
                      alt="Tool Icon 3"
                      width="30"
                      height="30"
                    />
                    <img
                      src="assets/images/skills/skill4.svg"
                      alt="Tool Icon 4"
                      width="30"
                      height="30"
                    />
                    <img
                      src="assets/images/skills/skill5.svg"
                      alt="Tool Icon 5"
                      width="30"
                      height="30"
                    />
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
            The goal of this project is to design an accessible and user-friendly food delivery website tailored specifically for senior citizens (aged 60+) in India. The website aims to provide a seamless online ordering experience while addressing the unique needs and limitations of this demographic, such as vision, hearing, or motor impairments.
            </p>
            <p>
            The primary target audience for this project is senior citizens in India who can understand English. However, the design must also consider the potential involvement of caregivers or family members who may assist in the online ordering process on behalf of the seniors.
            </p>
          </div>
          <div className="row pb-15">
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <Image
                  src="/assets/images/Casestudies/cisco/home-1.png"
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
                  src="https://miro.com/app/live-embed/uXjVOKM2BcA=/?moveToViewport=118,-1002,13929,6484"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-4s">
                <Image
                  src="/assets/images/Casestudies/cisco/home-2.png"
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
                  src="https://miro.com/app/live-embed/uXjVOKM2BcA=/?moveToViewport=118,-1002,13929,6484"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <Image
                  src="/assets/images/Casestudies/cisco/home-3.png"
                  alt="Project Middle"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <Image
                  src="/assets/images/Casestudies/cisco/home-4.png"
                  alt="Project Middle"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <Image
                  src="/assets/images/Casestudies/cisco/home-5.png"
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
                  src="https://xd.adobe.com/embed/45ede586-5dc6-4f4c-abe9-6a3d30d79a1c-10be/"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-6s">
                <Image
                  src="/assets/images/Casestudies/cisco/home-6.png"
                  alt="Project Middle"
                  width={800}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
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
      <section className="related-Projects-area pb-70 rpb-40 rel z-1">
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
      </section>
      <ScrollTop />
    </NoxfolioLayout>
  );
};
export default ProjectDetails;
