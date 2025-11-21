import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Dumbbell,
} from "lucide-react";
import FooterDate from "./footer-date";

export default function Footer() {
  return (
    <footer className="border-t-4 border-yellow-400 bg-black">
      {/* Main Footer Content - Fixed minimum height */}
      <div className="max-w-wide mx-auto px-8 py-12 text-3xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section - Fixed height */}
          <div className="flex min-h-[280px] flex-col">
            <div className="mb-4 flex h-10 items-center gap-2">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-400 p-2">
                <Dumbbell className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-yellow-400">GYMLY</span>
            </div>
            <p className="mb-4 min-h-[80px] text-gray-400">
              Transform your body and mind. Join the fitness revolution and make
              your body shape with us.
            </p>
            <div className="mt-auto flex gap-3">
              <a
                href="#"
                aria-label="facebook"
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400 p-2 transition-colors hover:bg-yellow-300"
              >
                <Facebook className="size-8 text-black" />
              </a>
              <a
                href="#"
                aria-label="instagram"
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400 p-2 transition-colors hover:bg-yellow-300"
              >
                <Instagram className="size-8 text-black" />
              </a>
              <a
                href="#"
                aria-label="twitter"
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400 p-2 transition-colors hover:bg-yellow-300"
              >
                <Twitter className="size-8 text-black" />
              </a>
              <a
                href="#"
                aria-label="youtube"
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-400 p-2 transition-colors hover:bg-yellow-300"
              >
                <Youtube className="size-8 text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links - Fixed height */}
          <div className="min-h-[280px]">
            <h3 className="mb-4 h-8 text-xl font-bold text-yellow-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  About Us
                </a>
              </li>
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  Classes
                </a>
              </li>
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  Membership
                </a>
              </li>
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  Trainers
                </a>
              </li>
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  Gallery
                </a>
              </li>
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Programs - Fixed height */}
          <div className="min-h-[280px]">
            <h3 className="mb-4 h-8 text-xl font-bold text-yellow-400">
              Programs
            </h3>
            <ul className="space-y-2">
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  Strength Training
                </a>
              </li>
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  Cardio Fitness
                </a>
              </li>
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  Weight Loss
                </a>
              </li>
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  Muscle Building
                </a>
              </li>
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  CrossFit
                </a>
              </li>
              <li className="flex h-8 items-center">
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  Personal Training
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info - Fixed height */}
          <div className="flex min-h-[280px] flex-col">
            <h3 className="mb-4 h-8 text-xl font-bold text-yellow-400">
              Contact Us
            </h3>
            <ul className="flex-grow space-y-4">
              <li className="flex min-h-[60px] items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <span className="text-gray-400">
                  123 Fitness Street, Gym District, City 12345
                </span>
              </li>
              <li className="flex h-8 items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex h-8 items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-yellow-400" />
                <span className="text-gray-400">info@gymly.com</span>
              </li>
            </ul>

            {/* Newsletter - Fixed height */}
            <div className="mt-6">
              <p className="mb-2 flex h-8 items-center text-2xl text-gray-400">
                Subscribe to our newsletter
              </p>
              <div className="flex h-12">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-l-lg bg-gray-900 px-4 py-2 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
                <button className="w-20 flex-shrink-0 rounded-r-lg bg-yellow-400 px-4 py-2 font-bold text-black transition-colors hover:bg-yellow-300">
                  GO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider - Fixed height */}
      <div className="h-px bg-gray-800"></div>

      {/* Bottom Bar - Fixed height */}
      <div className="max-w-wide mx-auto flex min-h-[120px] flex-col items-center justify-between gap-4 px-8 py-12 text-2xl md:flex-row">
        <FooterDate />
        <div className="flex flex-wrap justify-center gap-6 md:justify-end">
          <a
            href="#"
            className="whitespace-nowrap text-gray-400 transition-colors hover:text-yellow-400"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="whitespace-nowrap text-gray-400 transition-colors hover:text-yellow-400"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="whitespace-nowrap text-gray-400 transition-colors hover:text-yellow-400"
          >
            Cookie Policy
          </a>
        </div>
      </div>

      {/* CTA Strip - Fixed height */}
      <div className="flex min-h-[96px] items-center bg-yellow-400 py-4">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-8 md:flex-row">
          <p className="text-2xl font-bold text-black">
            Ready to start your fitness journey?
          </p>
          <button className="flex h-14 items-center justify-center rounded-lg bg-black px-8 py-3 font-bold whitespace-nowrap text-yellow-400 transition-colors hover:bg-gray-900">
            Get Started Today
          </button>
        </div>
      </div>
    </footer>
  );
}
