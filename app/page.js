"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Importing icons as before
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export default function Home() {
  // Animation variants for the logo and text
  const logoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  // Animation for headings
  const headingVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  };

  // Animation for text and button
  const textButtonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  };

  // Hover effect for "Book a call"
  const bookCallHover = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex justify-center h-screen items-center"
      initial="hidden"
      animate="visible"
    >
      <div className="w-full sm:w-[45rem] px-4">
        <motion.div className="flex gap-1 items-center" variants={logoVariants}>
          <Image
            src="/logo.png"
            width={50}
            height={50}
            className="w-5 h-5"
            alt="Einstein logo"
          />
          <p className="font-semibold">Einstein</p>
        </motion.div>

        <motion.h1
          className="text-5xl mt-5 font-semibold"
          variants={headingVariants}
        >
          Redefine the way <br />
          you do research.
        </motion.h1>

        <motion.p className="font-medium mt-5" variants={textButtonVariants}>
          From experimentation to publication
          <br /> in the blink of an eye.
        </motion.p>

        <motion.button
          className="pl-4 pr-24 py-2 text-left rounded-xl group bg-[#00A0FF] hover:bg-[#6cbeed] transition-all mt-4 font-semibold"
          variants={textButtonVariants}
        >
          <p className="text-white flex text-xs items-center">
            Find out more
            <ArrowUpRightIcon className="w-5 h-5" />
          </p>
          <p className="text-lg text-white font-semibold">Einstein is hiring</p>
        </motion.button>
        <motion.p
          className="text-gray-500 text-sm mt-5"
          whileHover="hover"
          variants={bookCallHover}
        >
          Interested?{" "}
          <span className="underline cursor-pointer">Book a call</span>
        </motion.p>
      </div>
    </motion.div>
  );
}
