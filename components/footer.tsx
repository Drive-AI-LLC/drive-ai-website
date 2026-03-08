import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

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
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Email", href: "mailto:inquiries@driveai.llc", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-20">
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
            <p className="mt-6 text-background/60 max-w-md leading-relaxed text-base">
              Drive AI helps small businesses implement practical AI tools and workflow automations to save time, reduce manual work, and operate more efficiently.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-background mb-5 text-sm uppercase tracking-[0.15em]">Navigation</h3>
            <ul className="space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/60 hover:text-background transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-5 text-sm uppercase tracking-[0.15em]">Contact</h3>
            <p className="text-background/60 mb-6">inquiries@driveai.llc</p>
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors duration-200"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 text-background" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10">
          <p className="text-center text-background/40 text-sm tracking-wide">
            © {new Date().getFullYear()} Drive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
