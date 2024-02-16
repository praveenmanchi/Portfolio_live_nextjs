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
import Head from 'next/head';

export const metadata = {
  title: {
    template: "Praveen Manchi || %s",
    default:"Praveen Manchi || Home", // a default is required when creating a template
  },
  metadataBase: new URL('https://manchipraveen.vercel.app/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    images: ['https://www.istockphoto.com/photo/digital-eye-wave-lines-stock-background-gm1399246824-453166593'],
  },
  description: "Praveen's Portfolio - Explore the creative works and projects in UX/UI design, web development, and more.",
};


export default function HomeOnePage() {
  return (
    <NoxfolioLayout onePageMenu={true}>
     
      {/* Hero Section Start */}
      <Hero />
      {/* Hero Section End */}
      {/* About Area start */}
      <About />
      {/* About Area end */}
      {/* Resume Area start */}
      <div className="headline-area rel z-2 py-25">
        <div className="headline-wrap">
          <span className="marquee-wrap">
            <span className="marquee-inner left">
              <span className="marquee-item">
                branding
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                digital marketing
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                art direction
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
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">
                branding
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                digital marketing
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                art direction
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
            </span>
            <span className="marquee-inner left">
              <span className="marquee-item">
                branding
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                digital marketing
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                product design
                <i className="far fa-asterisk" />
              </span>
              <span className="marquee-item">
                art direction
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
            </span>
          </span>
        </div>
      </div>
      <Resume />
      {/* Resume Area end */}
      {/* Services Area start */}
      <Clients />
      {/* Client Log end */}
      <Skill />
      {/* Skill Area end */}
      {/* Projects Area start */}

      <Projects />
      {/* Projects Area end */}
      {/* Testimonial Area start */}
      <Testimonial />
      {/* Testimonial Area end */}
      {/* Pricing Area start */}
      <ScrollTop />
    </NoxfolioLayout>
  );
}
