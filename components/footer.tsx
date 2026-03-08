import Link from "next/link"
import { Linkedin, Twitter, Mail } from "lucide-react"

const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Email", href: "mailto:hello@driveai.com", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-semibold text-xl text-background">Drive AI</span>
            </Link>
            <p className="mt-4 text-background/70 max-w-md leading-relaxed">
              Drive AI helps small businesses implement practical AI tools and workflow automations to save time, reduce manual work, and operate more efficiently.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-background mb-4">Navigation</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contact</h3>
            <p className="text-background/70 mb-4">hello@driveai.com</p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5 text-background" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-background/50 text-sm">
            © {new Date().getFullYear()} Drive AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
