import Image from "next/image";

import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-[65rem] px-4">
        <nav className="py-4 flex justify-between">
          <div className="flex gap-2 items-center">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              className="w-6 h-6"
              alt="Einstein logo"
            />
            <h1 className="font-semibold">Einstein</h1>
          </div>
          <div className="flex gap-6 font-medium items-center">
            <a href="/">Updates</a>
            <a href="/">Pricing</a>
            <a href="/">Log in</a>
            <button className="px-3 py-1 rounded-full bg-blue-500 hover:bg-blue-400 transition text-white">
              Sign up
            </button>
          </div>
        </nav>
        <div className={`${jakarta.className} mt-40`}>
          <h1 className="text-center text-6xl font-semibold leading-tight">
            Redefining the way
            <br />
            you research.
          </h1>
          <p className="text-center font-medium text-gray-600 text-lg mt-6">
            Innovating on last century&apos;s ancient research software.
            <br />
            Sharing and conducting research has never been any easier.
          </p>
          <div className="flex justify-center mt-6 font-semibold -space-x-20">
            <input
              type="text"
              className="ring-1 rounded-full px-5 py-1  text-lg ring-gray-300 font-medium"
              placeholder="Email"
            />
            <button className="rounded-full px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white">
              Join waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
