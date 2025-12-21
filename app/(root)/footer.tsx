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
import { connection } from "next/server";

const socials = [
  { icon: Facebook, label: "facebook" },
  { icon: Instagram, label: "instagram" },
  { icon: Twitter, label: "twitter" },
  { icon: Youtube, label: "youtube" }
];

const quickLinks = [
  "About Us",
  "Classes",
  "Membership",
  "Trainers",
  "Gallery",
  "Blog"
];

const programs = [
  "Strength Training",
  "Cardio Fitness",
  "Weight Loss",
  "Muscle Building",
  "CrossFit",
  "Personal Training"
];

export default function Footer() {
  return (
    <footer className="border-t-4 border-yellow-400 bg-black min-h-[calc(80vh,45rem)]">
      <div className="max-w-wide mx-auto px-8 py-12 text-3xl">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          <FooterBrand />

          <FooterList title="Quick Links" items={quickLinks} />

          <FooterList title="Programs" items={programs} />

          <FooterContact />
        </div>
      </div>

      <div className="h-px bg-gray-800"></div>

      <FooterBottom />

      <FooterCTA />
    </footer>
  );
}

function FooterBrand() {
  return (
    <div className="flex min-h-[280px] flex-col">
      <div className="mb-4 flex h-10 items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 p-2">
          <Dumbbell className="h-6 w-6 text-black" />
        </div>
        <span className="text-2xl font-bold text-yellow-400">GYMLY</span>
      </div>

      <p className="mb-4 min-h-[80px] text-gray-400">
        Transform your body and mind. Join our training community.
      </p>

      <div className="mt-auto flex gap-3">
        {socials.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={i}
              aria-label={s.label}
              href="#"
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400 p-2 transition-colors hover:bg-yellow-300"
            >
              <Icon className="size-8 text-black" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="min-h-[280px]">
      <h3 className="mb-4 h-8 text-xl font-bold text-yellow-400">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex h-8 items-center">
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-yellow-400"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterContact() {
  return (
    <div className="flex min-h-[280px] flex-col">
      <h3 className="mb-4 h-8 text-xl font-bold text-yellow-400">
        Contact Us
      </h3>

      <ul className="grow space-y-4">
        <li className="flex min-h-[60px] items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 text-yellow-400" />
          <span className="text-gray-400">
            123 Fitness Street, Gym District, City 12345
          </span>
        </li>

        <li className="flex h-8 items-center gap-3">
          <Phone className="h-5 w-5 text-yellow-400" />
          <span className="text-gray-400">+1 (555) 123-4567</span>
        </li>

        <li className="flex h-8 items-center gap-3">
          <Mail className="h-5 w-5 text-yellow-400" />
          <span className="text-gray-400">info@gymly.com</span>
        </li>
      </ul>

      <NewsletterForm />
    </div>
  );
}

function NewsletterForm() {
  return (
    <div className="mt-6">
      <p className="mb-2 flex h-8 items-center text-2xl text-gray-400">
        Subscribe to our newsletter
      </p>

      <div className="flex h-12">
        <input
          type="email"
          placeholder="Your email"
          className="min-w-0 flex-1 rounded-l-lg bg-gray-900 px-4 text-white focus:ring-2 focus:ring-yellow-400 focus:outline-none"
        />
        <button className="w-20 rounded-r-lg bg-yellow-400 px-4 font-bold text-black transition-colors hover:bg-yellow-300">
          GO
        </button>
      </div>
    </div>
  );
}

async function FooterBottom() {
  return (
    <div className="max-w-wide mx-auto flex min-h-[120px] flex-col items-center justify-between gap-4 px-8 py-12 text-2xl md:flex-row">
      <p className="text-gray-400">
        ©{new Date().getFullYear()} GYMLY. All rights reserved.
      </p>

      <div className="flex flex-wrap justify-center gap-6 md:justify-end">
        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
          (item, i) => (
            <a
              key={i}
              href="#"
              className="whitespace-nowrap text-gray-400 transition-colors hover:text-yellow-400"
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

function FooterCTA() {
  return (
    <div className="flex min-h-[96px] items-center bg-yellow-400 py-4">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-8 md:flex-row">
        <p className="text-2xl font-bold text-black">
          Ready to start your fitness journey?
        </p>

        <button className="flex h-14 items-center justify-center rounded-lg bg-black px-8 py-3 font-bold text-yellow-400 hover:bg-gray-900">
          Get Started Today
        </button>
      </div>
    </div>
  );
}
