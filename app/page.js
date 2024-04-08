"use client";

import Image from "next/image";
import { Inter } from "next/font/google";

import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="text-center px-8">
        <div className="flex items-center justify-center gap-1 mt-6">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            className="h-5 w-5"
            alt="Einstein logo"
          />
          <p className={`${inter.className} font-semibold`}>Einstein</p>
        </div>
        <button className="rounded-full mt-20 text-sm ring-1 ring-gray-400 text-gray-400 font-medium px-2 py-1 cursor-help">
          Closed beta
        </button>
        <h1 className="text-5xl tracking-tight mt-4 font-medium font-serif">
          Revolutionize the way
          <br />
          you research.
        </h1>
        <p className="mt-4 leading-tight">
          From experimentation to publication
          <br />
          at the snap of a finger.
        </p>

        <div className="flex justify-center gap-2 items-center mt-4">
          <button className="bg-gray-200 text-gray-400 cursor-not-allowed px-2 rounded-md font-medium">
            Start for free
          </button>
          <p className="cursor-not-allowed text-gray-400">Book a demo</p>
        </div>
      </div>
    </div>
  );
}
