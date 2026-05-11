import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Facebook } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Our Systems", href: "/services" },
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
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Drive AI"
                width={140}
                height={52}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-white/50 text-sm leading-relaxed">
              Drive AI builds revenue-generating systems for roofing companies.
            </p>
            <div className="flex gap-2.5 mt-5">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon className="w-4 h-4 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-white text-xs uppercase tracking-[0.15em] mb-1">Navigation</h3>
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-white/55 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-white text-xs uppercase tracking-[0.15em] mb-1">Contact</h3>
            <a
              href="mailto:inquiries@driveai.llc"
              className="text-sm text-white/55 hover:text-white transition-colors duration-200"
            >
              inquiries@driveai.llc
            </a>
            <Link
              href="/contact"
              className="text-sm text-white/55 hover:text-white transition-colors duration-200"
            >
              Book a Call
            </Link>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-white/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Drive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
