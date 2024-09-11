"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Hero Background Image */}
      <Image
        src="/img/hero.png"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        priority={true}
        className="absolute top-0 left-0 w-full h-full z-[-1]"
      />

      {/* Hero Content */}
      <motion.div
        className="mx-auto max-w-screen-xl h-screen flex items-center px-4 py-32 mobile:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-xl">
          {/* Title */}
          <motion.h1
            className="text-3xl font-extrabold text-white mobile:text-4xl md:text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Instant collaboration for remote teams
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-4 max-w-lg text-white mobile:text-sm md:text-lg/relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            All-in-one place for your remote team to chat, collaborate, and
            track project progress.
          </motion.p>

          {/* Input and Button */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            {/* Input with Icon */}
            <Input
              label="email"
              placeholder="Enter your email"
              icon={<FaArrowRightLong />}
              aria-label="Email address"
            />

            {/* Call-to-action Button */}
            <Button label="Get Early Access" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
