import React from "react";
import { Diamond, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative z-50 bg-white px-40 py-10 rounded-t-2xl dark:bg-zinc-900">
      <div className="flex justify-between items-start pb-20  flex-wrap">
        <section className="lg:w-[30%] mb-10 lg:mb-0">
          <h3 className="mb-5 flex items-center gap-x-8 ">
            <span className="font-bold">
              <Diamond strokeWidth={3} size={40} className="text-orange-500" />
            </span>
            <span className="text-5xl font-semibold"> Opion</span>
          </h3>
          <ul className="space-y-5 [&>li]:font-normal [&>li]:font-sans [&>li]:text-xl">
            <li>
              Ease of shopping is our main focus. With powerful search features
              and customizable, you can easily find the products you are looking
              for.
            </li>
            <li className="flex items-center gap-x-5">
              <Facebook
                strokeWidth={1}
                size={50}
                className="border p-2 rounded-full bg-gray-600 text-white dark:text-black"
              />
              <Instagram
                strokeWidth={1}
                size={50}
                className="border p-2 rounded-full bg-gray-600 text-white dark:text-black"
              />
              <Linkedin
                strokeWidth={1}
                size={50}
                className="border p-2 rounded-full bg-gray-600 text-white dark:text-black"
              />
            </li>
            <li className="font-semibold!">Subscribe to Newsletter</li>
            <li>
              <input
                type="email"
                className="bg-gray-200 rounded-lg py-3 w-full placeholder:pl-5 placeholder:text-gray-400 placeholder:text-lg dark:bg-zinc-950"
                placeholder="Enter Your Email Here"
              />
            </li>
          </ul>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Get Started</h2>
          <ul className="space-y-4 [&>li]:font-normal [&>li]:font-sans [&>li]:text-xl">
            <li>Service</li>
            <li>Contact Us</li>
            <li>Affiliated Program</li>
            <li>About Us</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Get Started</h2>
          <ul className="space-y-4 [&>li]:font-normal [&>li]:font-sans [&>li]:text-xl">
            <li>Dashboard</li>
            <li>Platform</li>
            <li>Workout Library</li>
            <li>App Design</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Get Started</h2>
          <ul className="space-y-4 [&>li]:font-normal [&>li]:font-sans [&>li]:text-xl">
            <li>About Us</li>
          </ul>
        </section>
      </div>
      <hr className="dark:bg-gray-400" />
      <section className="pt-5 px-20 flex justify-between items-center font-sans text-xl text-gray-400 tracking-wider flex-wrap gap-y-5">
        <p>2024 MaxFit</p>
        <p>Twitter - Instagram - Facebook</p>
      </section>
    </div>
  );
};

export default Footer;
