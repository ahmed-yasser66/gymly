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

// Pre-calculate year to avoid CLS from dynamic calculation
const CURRENT_YEAR = 2024;

export default function Footer() {
  return (
    <footer className="border-t-4 border-yellow-400 bg-black">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Use explicit grid with auto-rows to prevent height shifts */}
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          <FooterBrand />
          <FooterList title="Quick Links" items={quickLinks} />
          <FooterList title="Programs" items={programs} />
          <FooterContact />
        </div>
      </div>

      {/* Fixed height divider */}
      <div className="h-px bg-gray-800"></div>

      <FooterBottom />

      <FooterCTA />
    </footer>
  );
}

function FooterBrand() {
  return (
    <div className="flex h-full min-h-[320px] flex-col">
      {/* Fixed height for logo area */}
      <div className="mb-4 flex h-10 items-center gap-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 p-2">
          <Dumbbell className="h-6 w-6 text-black" />
        </div>
        <span className="text-2xl font-bold text-yellow-400">GYMLY</span>
      </div>

      {/* Fixed height for description */}
      <p className="mb-6 h-16 text-base leading-relaxed text-gray-400">
        Transform your body and mind. Join our training community.
      </p>

      {/* Social icons with fixed dimensions */}
      <div className="mt-auto flex gap-3">
        {socials.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={i}
              aria-label={s.label}
              href="#"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-400 p-2 transition-colors hover:bg-yellow-300"
            >
              <Icon className="h-5 w-5 text-black" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="h-full min-h-[320px]">
      {/* Fixed height for title */}
      <h3 className="mb-4 h-8 text-lg font-bold text-yellow-400">{title}</h3>
      <ul className="space-y-2">
        {items.map((item: any, i: any) => (
          <li key={i} className="h-7 flex items-center">
            <a
              href="#"
              className="text-base text-gray-400 transition-colors hover:text-yellow-400"
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
    <div className="flex h-full min-h-[320px] flex-col">
      {/* Fixed height for title */}
      <h3 className="mb-4 h-8 text-lg font-bold text-yellow-400">
        Contact Us
      </h3>

      <ul className="mb-6 space-y-4">
        {/* Fixed min-height for each contact item */}
        <li className="flex min-h-[48px] items-start gap-3">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-yellow-400" />
          <span className="text-base text-gray-400">
            123 Fitness Street, Gym District, City 12345
          </span>
        </li>

        <li className="flex h-7 items-center gap-3">
          <Phone className="h-5 w-5 shrink-0 text-yellow-400" />
          <span className="text-base text-gray-400">+1 (555) 123-4567</span>
        </li>

        <li className="flex h-7 items-center gap-3">
          <Mail className="h-5 w-5 shrink-0 text-yellow-400" />
          <span className="text-base text-gray-400">info@gymly.com</span>
        </li>
      </ul>

      <NewsletterForm />
    </div>
  );
}

function NewsletterForm() {
  return (
    <div className="mt-auto">
      {/* Fixed height for label */}
      <p className="mb-2 h-6 flex items-center text-sm text-gray-400">
        Subscribe to our newsletter
      </p>

      {/* Fixed height for form */}
      <div className="flex h-11">
        <input
          type="email"
          placeholder="Your email"
          className="min-w-0 flex-1 rounded-l-lg bg-gray-900 px-4 text-base text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="w-20 shrink-0 rounded-r-lg bg-yellow-400 px-4 text-sm font-bold text-black transition-colors hover:bg-yellow-300">
          GO
        </button>
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      <div className="flex min-h-[64px] flex-col items-center justify-between gap-4 md:flex-row">
        {/* Fixed year to prevent CLS */}
        <p className="text-base text-gray-400">
          ©{CURRENT_YEAR} GYMLY. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:justify-end">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (item, i) => (
              <a
                key={i}
                href="#"
                className="whitespace-nowrap text-base text-gray-400 transition-colors hover:text-yellow-400"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function FooterCTA() {
  return (
    <div className="bg-yellow-400">
      {/* Fixed height for CTA section */}
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center px-8">
        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-lg font-bold text-black md:text-xl">
            Ready to start your fitness journey?
          </p>

          <button className="h-12 shrink-0 rounded-lg bg-black px-8 text-base font-bold text-yellow-400 transition-colors hover:bg-gray-900">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}