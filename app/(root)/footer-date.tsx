"use client";

export default function FooterDate() {
  return (
    <p className="text-gray-400">
      ©{new Date().getFullYear()} GYMLY. All rights reserved.
    </p>
  );
}
