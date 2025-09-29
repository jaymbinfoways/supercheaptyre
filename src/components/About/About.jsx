import React from 'react';
import AboutUsHero from './AboutUsHero';
import AboutUsContent from './AboutUsContent';
import AboutUsVideo from './AboutUsVideo';
import CompanyOverviewSection from './AboutCompanyOverviewSection';
import ExperienceExpertiseSection from './ExperienceExpertiseSection';


export const About = () => {
  const decorativeImages = [
    {
      src: "https://c.animaapp.com/mg0peqr0ivhhvg/img/feature-banner-find-store.png",
      alt: "Feature banner find",
    },
    {
      src: "https://c.animaapp.com/mg0peqr0ivhhvg/img/tyre-shop-homepage-720-w-420-h-5d46a023e4-2.png",
      alt: "Tyre shop homepage",
    },
    {
      src: "https://c.animaapp.com/mg0peqr0ivhhvg/img/hand-selecting-tyre-at-a-dealer-listing-page-360-w-245-h-7bcbb1e.png",
      alt: "Hand selecting tyre",
    },
    {
      src: "https://c.animaapp.com/mg0peqr0ivhhvg/img/tire-rack-pirelli-cinturato-p7-ogi-1-2.png",
      alt: "Tire rack pirelli",
    },
    {
      src: "https://c.animaapp.com/mg0peqr0ivhhvg/img/group-15162.png",
      alt: "Group",
    },
  ];

  const topIcons = [
    {
      src: "https://c.animaapp.com/mg0peqr0ivhhvg/img/group-15172.png",
      alt: "Group",
    },
    {
      src: "https://c.animaapp.com/mg0peqr0ivhhvg/img/group-15169.png",
      alt: "Group",
    },
    {
      src: "https://c.animaapp.com/mg0peqr0ivhhvg/img/group-15171.png",
      alt: "Group",
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-neutral-100 overflow-hidden"
      data-model-id="1297:9931"
    >
      {/* Top Icons */}
      <div className="absolute top-3 right-10 flex gap-4 z-10">
        {topIcons.map((icon, index) => (
          <img
            key={`top-icon-${index}`}
            className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px]"
            alt={icon.alt}
            src={icon.src}
          />
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="flex flex-col w-full">
        {/* Hero Image */}
        <div className="w-full relative">
          <img
            className="w-full max-w-[1370px] h-[260px] sm:h-[360px] md:h-[480px] lg:h-[530px] object-cover mx-auto"
            alt={decorativeImages[0].alt}
            src={decorativeImages[0].src}
          />
        </div>

        {/* About Us Section */}
        <div className="w-full">
          <AboutUsHero />
        </div>

        {/* Mission Statement Section with side image */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="h-full">
                <AboutUsContent />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="h-full">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  alt={decorativeImages[1].alt}
                  src={decorativeImages[1].src}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview Section with side image */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
            <div className="lg:col-span-6">
              <div className="h-full">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  alt={decorativeImages[2].alt}
                  src={decorativeImages[2].src}
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="h-full">
                <CompanyOverviewSection />
              </div>
            </div>
          </div>
        </div>

        {/* Video Section with side image */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="h-full">
                <AboutUsVideo />
              </div>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="h-full">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  alt={decorativeImages[3].alt}
                  src={decorativeImages[3].src}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Experience Expertise Section with side image */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch min-h-[320px] sm:min-h-[360px] md:min-h-[400px]">
            <div className="lg:col-span-6">
              <div className="h-full">
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  alt={decorativeImages[4].alt}
                  src={decorativeImages[4].src}
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="h-full">
                <ExperienceExpertiseSection />
              </div>
            </div>
          </div>
        </div>

        {/* Large Group Image */}
        {/* <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-8">
          <img
            className="w-full max-w-[1370px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[453px] object-cover rounded-2xl"
            alt={decorativeImages[5].alt}
            src={decorativeImages[5].src}
          />
        </div> */}

      </div>
    </div>
  );
};

export default About;
