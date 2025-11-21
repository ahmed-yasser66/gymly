import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "GYMLY is your ultimate fitness destination — modern equipment, expert trainers, and personalized workout plans designed to help you build strength, burn fat, and transform your body. Join GYMLY today and unlock your best self with a supportive gym community, group fitness classes, and science-based training programs.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "GYMLY",
    description:
      "GYMLY is your ultimate fitness destination — modern equipment, expert trainers, and personalized workout plans designed to help you build strength, burn fat, and transform your body.",
    url: "http://localhost:3000",
    siteName: "GYMLY",
    images: [
      {
        url: "http://localhost:3000/opengraph.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://ahmed-yasser.vercel.app"),
  keywords: ["GYMLY", "Gym", "workout", "exercises"],
};

export default function Page() {
  return (
    <section className="my-20 min-h-screen bg-black">
      {/* Hero Section */}
      <div className="py-12">
        <div className="max-w-wide mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-7xl">
            Get in <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="mx-auto max-w-5xl text-gray-400">
            Have a question about our gym? We&apos;re here to help you achieve
            your fitness goals. Reach out to us and we&apos;ll respond as soon
            as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8">
          {/* Contact Information Cards */}
          <div className="rounded-lg bg-zinc-900 p-6 transition-all duration-300 hover:scale-105 hover:transform">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
              <Phone className="text-black" size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Phone</h3>
            <p className="mb-2 text-gray-400">Mon-Fri from 8am to 10pm</p>
            <a
              href="tel:+1234567890"
              className="font-semibold text-yellow-400 hover:underline"
            >
              +1 (234) 567-890
            </a>
          </div>

          <div className="rounded-lg bg-zinc-900 p-6 transition-all duration-300 hover:scale-105 hover:transform">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
              <Mail className="text-black" size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Email</h3>
            <p className="mb-2 text-gray-400">
              We&apos;ll respond within 24 hours
            </p>
            <a
              href="mailto:info@gymly.com"
              className="font-semibold text-yellow-400 hover:underline"
            >
              info@gymly.com
            </a>
          </div>

          <div className="rounded-lg bg-zinc-900 p-6 transition-all duration-300 hover:scale-105 hover:transform">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
              <MapPin className="text-black" size={28} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Location</h3>
            <p className="mb-2 text-gray-400">Visit us at our gym</p>
            <p className="font-semibold text-yellow-400">
              123 Fitness Street
              <br />
              New York, NY 10001
            </p>
          </div>
        </div>

        <div className="grid gap-12">
          {/* Contact Form */}
          <div className="rounded-lg bg-zinc-900 p-8">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Send us a Message
            </h2>

            {false ? (
              <div className="rounded-lg bg-yellow-400 p-6 text-center text-black">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-black">
                  <Send className="text-yellow-400" size={32} />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Message Sent!</h3>
                <p className="font-semibold">
                  We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-semibold text-white"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white transition-all focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-semibold text-white"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white transition-all focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-semibold text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white transition-all focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block font-semibold text-white"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-lg bg-zinc-800 px-4 py-3 text-white transition-all focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="classes">Group Classes</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-semibold text-white"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg bg-zinc-800 px-4 py-3 text-white transition-all focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-400 py-4 font-bold text-black transition-colors hover:bg-yellow-500"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* Operating Hours */}
            <div className="rounded-lg bg-zinc-900 p-8">
              <div className="mb-6 flex items-center gap-3">
                <Clock className="text-yellow-400" size={32} />
                <h2 className="text-4xl font-bold text-white">
                  Operating Hours
                </h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-zinc-800 py-2">
                  <span className="font-semibold text-gray-400">
                    Monday - Friday
                  </span>
                  <span className="font-bold text-white">
                    6:00 AM - 10:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800 py-2">
                  <span className="font-semibold text-gray-400">Saturday</span>
                  <span className="font-bold text-white">
                    7:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800 py-2">
                  <span className="font-semibold text-gray-400">Sunday</span>
                  <span className="font-bold text-white">
                    8:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-semibold text-gray-400">Holidays</span>
                  <span className="font-bold text-yellow-400">Closed</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg bg-zinc-900 p-8">
              <h2 className="mb-4 font-bold text-white">Find Us</h2>
              <div className="flex aspect-video items-center justify-center rounded-lg bg-zinc-800">
                <div className="text-center">
                  <MapPin className="mx-auto mb-3 text-yellow-400" size={48} />
                  <p className="opacity-60">Map Integration</p>
                  <p className="text-lg opacity-60">123 Fitness Street, NY</p>
                </div>
              </div>
              <button className="mt-4 w-full rounded-lg bg-yellow-400 py-3 font-bold text-black transition-colors hover:bg-yellow-500">
                Get Directions
              </button>
            </div>

            {/* Social Media */}
            <div className="rounded-lg bg-zinc-900 p-8">
              <h2 className="mb-4 font-bold text-white">Follow Us</h2>
              <p className="mb-6 text-gray-400">
                Stay connected on social media
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition-all hover:bg-yellow-400 hover:text-black"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition-all hover:bg-yellow-400 hover:text-black"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-white transition-all hover:bg-yellow-400 hover:text-black"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 rounded-lg bg-zinc-900 p-8">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
          <div className="grid gap-6">
            <div className="rounded-lg bg-zinc-800 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">
                What are your membership options?
              </h3>
              <p className="text-gray-400">
                We offer monthly, quarterly, and annual memberships with various
                packages to suit your fitness goals.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-800 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">
                Do you offer personal training?
              </h3>
              <p className="text-gray-400">
                Yes! Our certified personal trainers are available for
                one-on-one sessions tailored to your needs.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-800 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">
                Can I try a free trial?
              </h3>
              <p className="text-gray-400">
                Absolutely! We offer a complimentary 3-day trial pass for
                first-time visitors.
              </p>
            </div>
            <div className="rounded-lg bg-zinc-800 p-6">
              <h3 className="mb-2 text-lg font-bold text-white">
                What equipment do you have?
              </h3>
              <p className="text-gray-400">
                We&apos;re fully equipped with cardio machines, free weights,
                resistance equipment, and functional training areas.
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
