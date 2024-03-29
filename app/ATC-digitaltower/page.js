import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import ScrollTop from "@/components/ScrollTop";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: {
    // template: "Praveen Manchi || %s",
    default: "Air Traffic Controllers",
  },
  openGraph: {
    images: [
      "https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/home-og.png",
    ],
  },
  description:
    "Empowering Air Traffic Controllers: Enhancing Airport Operations through Digital Tower Interfaces",
};

const ProjectDetails = () => {
  return (
    <NoxfolioLayout onePageMenu={true}>
      <section className="Projects-details-area  pb-130 rpb-100 rel z-1">
      <div className="Projects-details-image mb-50 wow fadeInUp delay-0-2s">
            <Image
              src="/assets/images/Casestudies/ATC/00-5.jpg"
              alt="Project Details"
              width={1500}
              height={600}
              className="w-full h-auto" // Add these classes
            />
          </div>
        <div className="container">
          
          <div className="row gap-120">
            <div className="col-lg-8">
              <div className="project-details-content wow fadeInUp delay-0-2s">
                <h3>Empowering Air Traffic Controllers: Enhancing Airport Operations through Digital Tower Interfaces</h3>
                <p className="big-letter">
                Managing air traffic control (ATC) operations at airports presents substantial operational and financial challenges. Traditional ATC systems heavily rely on human operators and physical infrastructure, leading to high maintenance costs and scalability limitations. With the growing demand for air travel exacerbating congestion and operational complexity, there is a pressing need to revolutionize ATC operations. This case study explores the integration of AI-driven digital tower technology to transform ATC processes, streamline operations, and mitigate financial burdens.
                </p>
                
                <ul className="list-style-one two-column mt-50 mb-40">
                  <li>Data Analysis and Prediction</li>
                  <li>Dynamic Resource Allocation</li>
                  <li>Real-Time Feedback Mechanisms </li>
                  <li>HIterative Improvement:CI</li>
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
                  backgroundImage: "url(/assets/images/Casestudies/benz/1.png)",
                }}
              >
                <div className="pd-info-item">
                  <span>Category</span>
                  <h5>Product Design</h5>
                </div>
                <div className="pd-info-item">
                  <span>Clients</span>
                  <h5>Personal Casestudy</h5>
                </div>
                <div className="pd-info-item">
                  <span>Tools Used</span>
                  <div style={{ display: "flex", gap: "30px" }}>
                    <img
                      src="assets/images/skills/skill1.svg"
                      alt="Tool Icon 1"
                      width="30"
                      height="30"
                    />
                    {/* <img
                      src="assets/images/skills/skill2.svg"
                      alt="Tool Icon 2"
                      width="30"
                      height="30"
                    /> */}
                    <img
                      src="assets/images/skills/skill3.svg"
                      alt="Tool Icon 3"
                      width="30"
                      height="30"
                    />
                    {/* <img
                      src="assets/images/skills/skill4.svg"
                      alt="Tool Icon 4"
                      width="30"
                      height="30"
                    /> */}
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
                  <h5>September 25, 2023</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="project-bottom-content mb-50 wow fadeInUp delay-0-2s">
            <h3 className="title mb-25">Project Summery</h3>
            <p>
           Air traffic control (ATC) is responsible for managing the safe and efficient movement of aircraft within airspace and at airports. Traditionally, ATC operations involve human controllers stationed in physical towers who monitor radar screens, communicate with pilots, and provide instructions for takeoffs, landings, and taxiing. However, this approach has inherent limitations, including reliance on manual processes, susceptibility to human error, and challenges in managing increasing air traffic volumes.
            </p>
            <p>
            Our project focused on revolutionizing air traffic control (ATC) operations at airports through the integration of AI-driven digital tower interfaces. By leveraging advanced algorithms and user-centric design principles, we aimed to enhance situational awareness, streamline operations, and alleviate financial burdens associated with traditional ATC systems.
            </p>

          </div>
          <div className="row pb-15">
            <div className="col-lg-12">
              <div className="image mb-30 wow fadeInUp delay-0-2s">
                <Image
                  src="/assets/images/Casestudies/ATC/ATC-1.jpg"
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
      
      <ScrollTop />
    </NoxfolioLayout>
  );
};
export default ProjectDetails;
