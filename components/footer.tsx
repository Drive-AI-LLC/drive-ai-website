import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Facebook } from "lucide-react"
import { Container } from "@/components/container"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
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
      <Container className="py-14 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Drive AI"
                width={140}
                height={52}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-6 text-white/60 max-w-md leading-relaxed text-base">
              Drive AI helps small businesses implement practical AI tools and workflow automations to save time, reduce manual work, and operate more efficiently.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-[0.15em]">Navigation</h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-[0.15em]">Contact</h3>
            <p className="text-white/60 mb-6">inquiries@driveai.llc</p>
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </Link>
              ))}
      </Container>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-white/40 text-sm tracking-wide">
            © {new Date().getFullYear()} Drive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
