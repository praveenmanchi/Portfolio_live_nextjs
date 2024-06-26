import About from "@/components/About";
// import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
// import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
// import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
// import Services from "@/components/Services";
import Skill from "@/components/Skill";
import ScrollTop from "@/components/ScrollTop";
import Testimonial from "@/components/Testimonial";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Head from "next/head";

export const metadata = {
  title: {
    template: "Praveen Manchi || Home ",
    // default: "Praveen Manchi || Home", // a default is required when creating a template
  },
  openGraph: {
    images: [
      "https://ycsfwdainpwgmgsjqppv.supabase.co/storage/v1/object/public/OG-images/home-og.png",
    ],
  },
  description:
    "Praveen's Portfolio - Explore the creative works and projects in UX/UI design, web development, and more.",
};

export default function HomeOnePage() {
  return (
    <NoxfolioLayout onePageMenu={true}>
      <Head>
       <link rel="favicon.ico" href="/assets/images/favicon.ico" />
      </Head>
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}
      {/* About Area start */}

      <div className="headline-area rel z-2 py-25">
        <div className="headline-wrap">
          <span className="marquee-wrap">
            <span className="marquee-inner left">
              <span className="marquee-item">
                UX designing
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI designing
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Usability Testing
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Lean UX
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Design Thinking
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Prototyping
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Personas
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                A/B Testing
                <i className="far fa-asterisk" />
              </span>
            </span>
            {/* <span className="marquee-inner left">
              <span className="marquee-item">
               Data Visualisation
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                User Flow
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                low To High Fidelity
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                User Acceptance Testing
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                User-Centered Design (UCD)
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI/UX Design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                motion graphics
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                strategy
                <i className="far fa-asterisk" />
              </span>
            </span> */}
            <span className="marquee-inner left">
              <span className="marquee-item">
                Design System
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UX Research
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Visualisation
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Accessibility
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                Development
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                UI/UX Design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                User-First
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                strategy
                <i className="far fa-asterisk" />
              </span>
            </span>
          </span>
        </div>
      </div>
      <About />
      {/* About Area end */}
      {/* Resume Area start */}
      <Projects />
      {/* Projects Area end */}
      {/* Testimonial Area start */}
      {/* <Testimonial /> */}
      {/* Testimonial Area end */}
      {/* Pricing Area start */}

      <Resume />
      {/* Resume Area end */}
      {/* Services Area start */}
      <Clients />
      {/* Client Log end */}
      <Skill />
      {/* Skill Area end */}
      {/* Projects Area start */}


      <ScrollTop />
    </NoxfolioLayout>
  );
}
