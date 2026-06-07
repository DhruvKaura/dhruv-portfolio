"use client";

import Link from "next/link";
import Image from "next/image";

export default function FooterSection() {
  return (
    <section className="relative bg-black text-white rounded-t-[40px] dark-cursor-area px-6 sm:px-10 lg:px-20 pt-20 sm:pt-24 lg:pt-28 pb-14 sm:pb-16">
      <div className="max-w-7xl mx-auto">
        {/* TOP LINKS */}
        <div className="space-y-12 sm:space-y-16 mb-20 sm:mb-24 lg:mb-28">
          <FooterLink
            title="Work"
            description="Curated feature projects and design archives"
            href="/work"
          />

          <FooterLink
            title="Background"
            description="Learn more about me, read my résumé and experience"
            href="/background"
          />
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          {/* LOGO */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/logo.svg"
              alt="Dhruv Logo"
              width={1000}
              height={400}
              className="
                w-[220px]
                sm:w-[320px]
                md:w-[420px]
                lg:w-[520px]
                xl:w-[600px]
                h-auto
              "
            />
          </div>

          {/* SOCIAL + COPYRIGHT */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="flex gap-4">
              <SocialIcon
                href="https://www.linkedin.com/in/dhruv-kaura/"
                icon="/icons/linkedin.svg"
              />

              <SocialIcon
                href="https://github.com/DhruvKaura"
                icon="/icons/github.svg"
              />

              <SocialIcon
                href="https://leetcode.com/u/DhruvKaura/"
                icon="/icons/leetcode.svg"
              />

              <SocialIcon
                href="mailto:dhruvkaura25@gmail.com"
                icon="/icons/gmail.svg"
              />
            </div>

            <p className="text-white/40 text-xs sm:text-sm text-center lg:text-right">
              © 2026 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterLink({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="
        group
        flex flex-col md:flex-row
        md:items-center
        justify-between
        gap-6
        border-b border-white/10
        pb-8
        hover:border-white/30
        transition-all duration-500
      "
    >
      <h3
        className="
        text-3xl sm:text-4xl md:text-5xl
        font-medium
        tracking-tight
        group-hover:translate-x-2
        transition-all duration-500
      "
      >
        {title}
      </h3>

      <div className="flex items-center gap-6">
        <p className="hidden md:block text-white/50 text-sm max-w-md">
          {description}
        </p>

        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
          →
        </div>
      </div>
    </Link>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
        group
        w-10 h-10
        rounded-full
        border border-white/20
        flex items-center justify-center
        transition-all duration-300
        hover:bg-white
      "
    >
      <Image
        src={icon}
        alt="social icon"
        width={18}
        height={18}
        className="
          transition-all duration-300
          group-hover:invert
        "
      />
    </Link>
  );
}