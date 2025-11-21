import { Metadata } from "next";

import {
  Target,
  Users,
  Award,
  TrendingUp,
  Clock,
  Dumbbell,
  Heart,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
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
const stats = [
  { number: "500+", label: "Active Members", icon: Users },
  { number: "15+", label: "Expert Trainers", icon: Award },
  { number: "10", label: "Years Experience", icon: TrendingUp },
  { number: "24/7", label: "Gym Access", icon: Clock },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower individuals to achieve their fitness goals through expert guidance, state-of-the-art facilities, and a supportive community that inspires transformation.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    description:
      "To become the leading fitness destination where every member feels valued, motivated, and equipped to live their healthiest, strongest life.",
  },
  {
    icon: Zap,
    title: "Our Values",
    description:
      "We believe in dedication, integrity, and excellence. Every workout, every rep, every member matters. We're committed to your success.",
  },
];

const features = [
  "State-of-the-art equipment",
  "Certified personal trainers",
  "Group fitness classes",
  "Nutrition counseling",
  "Custom workout plans",
  "24/7 gym access",
  "Clean & spacious facility",
  "Supportive community",
];

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative border-b-4 border-yellow-400 bg-black py-16 sm:py-20 lg:py-24">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="rounded-full bg-yellow-400 p-3">
                <Dumbbell className="h-8 w-8 text-black" />
              </div>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                ABOUT <span className="text-yellow-400">GYMLY</span>
              </h1>
            </div>
            <p className="mx-auto max-w-5xl leading-relaxed text-gray-300">
              Where strength meets dedication. We&apos;re not just a gym –
              we&apos;re a community dedicated to transforming lives through
              fitness, one rep at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-lg border-2 border-yellow-400 bg-black p-4 text-center transition-all duration-300 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 sm:p-6"
              >
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-yellow-400 sm:mb-4 sm:h-10 sm:w-10" />
                <p className="mb-2 font-bold text-yellow-400">{stat.number}</p>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl lg:text-5xl">
                Our <span className="text-yellow-400">Story</span>
              </h2>
              <div className="space-y-4 leading-relaxed text-gray-300">
                <p>
                  Founded in 2015, GYMLY started with a simple vision: to create
                  a space where fitness enthusiasts of all levels could come
                  together to push their limits and achieve their goals.
                </p>
                <p>
                  What began as a small neighborhood gym has grown into a
                  thriving fitness community. We&apos;ve helped thousands of
                  members transform their bodies, build confidence, and develop
                  lasting healthy habits.
                </p>
                <p>
                  Today, GYMLY stands as a testament to the power of dedication,
                  expert guidance, and a supportive community. Our
                  state-of-the-art facility and experienced trainers are here to
                  help you write your own success story.
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-yellow-400 p-6 sm:p-8 lg:p-10">
              <h3 className="mb-4 text-2xl font-bold text-black sm:mb-6 sm:text-5xl">
                Why Choose GYMLY?
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-black"
                  >
                    <div className="h-2 w-2 flex-shrink-0 rounded-full bg-black"></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="border-t-4 border-yellow-400 bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white sm:mb-12 sm:text-4xl lg:mb-16 lg:text-5xl">
            What We <span className="text-yellow-400">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="rounded-lg border-2 border-yellow-400 bg-black p-6 transition-all duration-300 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 sm:p-8"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-yellow-400 sm:mb-6 sm:h-16 sm:w-16">
                  <value.icon className="h-7 w-7 text-black sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-yellow-400 sm:mb-4 sm:text-4xl">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-wide mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center text-3xl font-bold text-white sm:mb-6 sm:text-4xl lg:text-5xl">
            Meet Our <span className="text-yellow-400">Expert Team</span>
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center text-gray-300 sm:mb-12 lg:mb-16">
            Our certified trainers bring years of experience and passion to help
            you achieve your fitness goals. They&apos;re not just trainers –
            they&apos;re your partners in transformation.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {[1, 2, 3, 4].map((trainer) => (
              <div key={trainer} className="group">
                <div className="overflow-hidden rounded-lg border-2 border-yellow-400 bg-gray-900 transition-all duration-300 hover:border-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20">
                  <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600">
                    <Users className="h-16 w-16 text-black opacity-50 sm:h-20 sm:w-20" />
                  </div>
                  <div className="p-4 text-center sm:p-6">
                    <h3 className="mb-2 font-bold text-white">Trainer Name</h3>
                    <p className="mb-2 text-sm text-yellow-400 sm:text-2xl">
                      Specialty
                    </p>
                    <p className="text-xs text-gray-400 sm:text-2xl">
                      Certified Professional
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-400 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-black sm:mb-6 sm:text-4xl lg:text-5xl">
            Ready to Transform Your Life?
          </h2>
          <p className="mb-6 text-black sm:mb-8">
            Join GYMLY today and become part of a community that&apos;s
            committed to your success. Your fitness journey starts here.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-black px-6 py-3 font-bold text-yellow-400 transition-colors hover:bg-gray-900 sm:px-8 sm:py-4">
              Join Now
            </button>
            <button className="rounded-lg border-2 border-black bg-transparent px-6 py-3 font-bold text-black transition-colors hover:bg-black hover:text-yellow-400 sm:px-8 sm:py-4">
              Schedule a Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
