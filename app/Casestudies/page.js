import PageBanner from "@/components/PageBanner";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

import dynamic from "next/dynamic";
const ProjectGridIsotop = dynamic(
  () => import("@/components/ProjectGridIsotop"),
  {
    ssr: false,
  }
);

export const metadata = {
  metadataBase: new URL('https://manchipraveen.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: {
    template: "Praveen Manchi || %s",
    default:"Praveen Manchi || Casestudies", // a default is required when creating a template
  },
  openGraph: {
    images: ['https://www.aceinfoway.com/blog/wp-content/uploads/2020/05/uiux_2.jpg'],
  },
  description: "Praveen's Portfolio - Explore the creative works and projects in UX/UI design, web development, and more.",
};


const ProjectsPage = () => {
  return (
    <NoxfolioLayout onePageMenu={true}>
      <PageBanner pageName={"Personal Casestudies"} />
      <section className="projects-area pt-40 pb-130 rpb-100 rel z-1">
        <div className="container">
          <ProjectGridIsotop />
          <div className="project-btn text-center wow fadeInUp delay-0-2s">
            <Link legacyBehavior href="/Casestudies">
              <a className="theme-btn">
                View More Casestudies <i className="far fa-angle-right" />
              </a>
            </Link>
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
    </NoxfolioLayout>
  );
};
export default ProjectsPage;
