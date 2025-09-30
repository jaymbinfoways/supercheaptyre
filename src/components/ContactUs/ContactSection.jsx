import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Card = React.forwardRef(function Card({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className,
      )}
      {...props}
    />
  );
});

const CardContent = React.forwardRef(function CardContent(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
});

export const ContactSection = () => {
  const contactCards = [
    {
      title: "Call Us",
      content: "(03) 9794 2222\n24/7 Emergency Line",
      icon: "/contactus/call.svg",
      delay: "200ms",
    },
    {
      title: "Hours",
      content: "Mon-Fri: 7AM-6PM\nSat: 8AM-4PM",
      icon: "/contactus/clock.svg",
      delay: "400ms",
    },
    {
      title: "Location",
      content: "Australia",
      icon: "/contactus/location.svg",
      delay: "600ms",
    },
  ];

  return (
    <section className="relative w-full h-auto sm:h-[420px] md:h-[448px] overflow-visible">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="New WHAT TO LOOK FOR"
        src="/contactus/contactbg.svg"
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pt-6">
        <h2 className="animate-fade-in [font-family:'Lexend',Helvetica] font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] tracking-[0] leading-tight sm:leading-snug md:leading-normal text-center mb-6 md:mb-8 drop-shadow-md">
          Contact Supercheaptyres Dandenong
        </h2>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-[30px] max-w-full md:max-w-[960px] w-full px-2 md:px-0">
          {contactCards.map((card, index) => (
            <Card
              key={index}
              className={`translate-y-[-1rem] animate-fade-in w-full sm:w-[300px] h-auto min-h-[200px] sm:h-[200px] md:h-[215px] bg-[#ff0009] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] border border-[#bfbfbf] overflow-hidden`}
              style={{ "--animation-delay": card.delay }}
            >
              <CardContent className="relative h-full p-4 sm:p-5">
                <div className="flex justify-center">
                <img
                  className="object-contain w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14"
                  alt="Contact icon"
                  src={card.icon}
                />
                </div>

                <div className="flex flex-col items-center justify-center px-2.5 py-2 mt-2 sm:mt-[10px]">
                  <div className="[font-family:'Lexend',Helvetica] font-semibold text-white text-base sm:text-xl md:text-2xl tracking-[0] leading-snug sm:leading-normal mb-1 sm:mb-3 md:mb-4">
                    {card.title}
                  </div>

                  <div className="[font-family:'Lexend',Helvetica] font-medium text-[#e7e6e6] text-sm sm:text-base text-center tracking-[0] leading-snug sm:leading-normal whitespace-pre-line break-words">
                    {card.content}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
