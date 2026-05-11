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
      <div className="max-w-[960px] mx-auto px-5 sm:px-6 lg:px-8 py-7 lg:py-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">

          {/* Brand */}
          <div className="max-w-[220px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Drive AI"
                width={120}
                height={44}
                className="h-7 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-3 text-white/50 text-xs leading-relaxed">
              Drive AI builds revenue-generating systems for roofing companies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white text-[10px] uppercase tracking-[0.15em] mb-2.5">Navigation</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs text-white/55 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-semibold text-white text-[10px] uppercase tracking-[0.15em]">Contact</h3>
            <a
              href="mailto:inquiries@driveai.llc"
              className="text-xs text-white/55 hover:text-white transition-colors duration-200"
            >
              inquiries@driveai.llc
            </a>
            <div className="flex gap-2 pt-1">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon className="w-3.5 h-3.5 text-white" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-5 pt-4 border-t border-white/10">
          <p className="text-white/30 text-[11px] tracking-wide">
            © {new Date().getFullYear()} Drive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
