import Image from "next/image";

import { Plus_Jakarta_Sans } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center">
      <div>
        <div
          className={`w-full sm:w-[60rem] px-4 sm:px-40 ${jakarta.className}`}
        >
          <nav className="py-3 border-b flex justify-between">
            <div className="flex gap-2 items-center">
              <Image
                src="/logo.png"
                width={500}
                height={500}
                className="w-8 h-8"
                alt="Einstein Logo"
              />
              <h1 className="font-bold">Einstein</h1>
            </div>
            <div className="flex gap-6 items-center font-semibold">
              <a href="/">Updates</a>
              <a href="/">Pricing</a>
              <button>
                <a>Login</a>
              </button>
              <button className="bg-[#3365F9] text-white px-3 py-1 rounded-full">
                Sign up
              </button>
            </div>
          </nav>

          <h1 className="mt-20 text-4xl font-semibold leading-normal">
            Conducting and sharing research hasn&apos;t changed since the 2000s.
          </h1>
          <h3 className="mt-2 text-xl font-semibold leading-normal">
            Einstein is working on bringing it to modern world.
          </h3>

          <div className="flex gap-4 mt-5 items-center">
            <button className="bg-[#871AE5] font-semibold text-white px-3 py-1 rounded-full">
              Get early access
            </button>
            <p className="font-semibold text-slate-500">
              Currently in development
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/graphic.png"
            height={1000}
            width={1000}
            alt="Microsoft products"
          />
        </div>
        <div
          className={`sm:w-[60rem] px-4 sm:px-40 mt-10 text-sm text-slate-500 font-medium ${jakarta.className}`}
        >
          <p>© Ashburn Computing Company 2024. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
