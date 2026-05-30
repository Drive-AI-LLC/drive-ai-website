import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Facebook } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ],
  social: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/drive-ai-llc", icon: Linkedin },
    { name: "Instagram", href: "https://www.instagram.com/driveai.llc/", icon: Instagram },
    { name: "Facebook", href: "https://www.facebook.com/driveai.llc/", icon: Facebook },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1e2a38] text-white">
      <div className="max-w-[1080px] mx-auto px-5 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">

          {/* Brand */}
          <div className="max-w-[260px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-white.svg"
                alt="Drive AI"
                width={140}
                height={48}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-3.5 text-white/50 text-sm leading-relaxed">
              <em>Drive</em> AI automates insurance supplement requests for roofing companies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white text-[10px] uppercase tracking-[0.15em] mb-3">Navigation</h3>
            <div className="grid grid-cols-2 gap-x-7 gap-y-2.5">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-white/55 hover:text-white transition-colors duration-200 leading-relaxed"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-[10px] uppercase tracking-[0.15em]">Contact</h3>
            <a
              href="mailto:inquiries@driveai.llc"
              className="text-sm text-white/55 hover:text-white transition-colors duration-200 leading-relaxed"
            >
              inquiries@driveai.llc
            </a>
            <div className="flex gap-2.5 pt-0.5">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon className="w-3.5 h-3.5 text-white" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-7 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-white/30 text-[11px] tracking-wide">
            © {new Date().getFullYear()} Drive AI. All rights reserved.
          </p>
          <Link href="/privacy" className="text-white/30 text-[11px] tracking-wide hover:text-white/50 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
