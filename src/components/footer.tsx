import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#00434D] text-white">
        <div className="container mx-auto px-5 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#FEDEBC]">Beautify</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pakistan&apos;s most trusted salon discovery and booking platform.
                Find, book, and enjoy premium salon services near you.
              </p>
              <div className="flex gap-4 pt-2">
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2.5 rounded-full hover:bg-[#006979] transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2.5 rounded-full hover:bg-[#006979] transition-colors">
                  <Instagram size={20} />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2.5 rounded-full hover:bg-[#006979] transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2.5 rounded-full hover:bg-[#006979] transition-colors">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#FEDEBC]">Quick Links</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-[#FEDEBC] transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-gray-300 hover:text-[#FEDEBC] transition-colors text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-300 hover:text-[#FEDEBC] transition-colors text-sm">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-[#FEDEBC] transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#FEDEBC]">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 text-[#FEDEBC] shrink-0" />
                  <Link href="mailto:support@beautify.pk" className="text-gray-300 hover:text-[#FEDEBC] transition-colors text-sm">
                    support@beautify.pk
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={18} className="mt-0.5 text-[#FEDEBC] shrink-0" />
                  <Link href="tel:+923001234567" className="text-gray-300 hover:text-[#FEDEBC] transition-colors text-sm">
                    +92 300 1234567
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 text-[#FEDEBC] shrink-0" />
                  <span className="text-gray-300 text-sm">
                    Lahore, Punjab, Pakistan
                  </span>
                </li>
              </ul>
              <div className="pt-3">
                <p className="text-sm text-gray-300 mb-3">Download the App</p>
                <div className="flex flex-col gap-2">
                  <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#006979] transition-colors px-4 py-2 rounded-lg text-xs font-medium text-center">
                    App Store
                  </Link>
                  <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-[#006979] transition-colors px-4 py-2 rounded-lg text-xs font-medium text-center">
                    Google Play
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Beautify. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/privacy" className="text-gray-400 hover:text-[#FEDEBC] transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-[#FEDEBC] transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="text-gray-400 hover:text-[#FEDEBC] transition-colors text-sm">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
