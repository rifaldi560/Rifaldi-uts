"use client";

import NavigationButtons from "@/components/NavigationButtons";
import TestimonialCard from "@/components/TestimonialCard";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Chealsea Morgan",
    title: "CEO ot Subway",
    rating: 5,
    content:
      "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
  },
  {
    name: "Nick Cave",
    title: "CMO ot Nokia",
    rating: 5,
    content:
      "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
  },
  {
    name: "Lana Rosenfeld",
    title: "Senior VP ot Pinterest",
    rating: 5,
    content:
      "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
  },
  {
    name: "Lana Rosenfeld",
    title: "Senior VP ot Pinterest",
    rating: 5,
    content:
      "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
  },
  {
    name: "Lana Rosenfeld",
    title: "Senior VP ot Pinterest",
    rating: 5,
    content:
      "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateCarouselScroll = () => {
      if (carouselRef.current) {
        const cardElements = carouselRef.current.querySelectorAll("div");
        const cardWidth = cardElements[0]?.offsetWidth || 0;
        const containerWidth = carouselRef.current.offsetWidth;

        // Calculate the scrollLeft value to center the selected card
        const scrollLeft =
          cardWidth * currentIndex - (containerWidth - 20 - cardWidth) / 2;

        carouselRef.current.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });
      }
    };

    updateCarouselScroll();
    window.addEventListener("resize", updateCarouselScroll);

    return () => {
      window.removeEventListener("resize", updateCarouselScroll);
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12">
      <div className="flex flex-col items-center">
        <div className="z-10 mb-8">
          <h2 className="text-3xl text-center font-bold">
            What our users are saying
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-scroll scrollbar-hide snap-x snap-mandatory px-4 min-h-[420px] h-auto items-center"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                rating={testimonial.rating}
                content={testimonial.content}
                isActive={index === currentIndex}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
