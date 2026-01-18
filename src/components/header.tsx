"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

interface RoutesType {
  id: number;
  label: string;
  href: string;
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const routes: RoutesType[] = [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "Features",
      href: "/#features",
    },
    {
      id: 3,
      label: "FAQ",
      href: "/#faq",
    },
    {
      id: 4,
      label: "Contact",
      href: "/#contact",
    },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/20 backdrop-blur-md py-6 px-5 md:px-10">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="z-50">
            <Image src={"/logo.svg"} alt="Beautify" width={100} height={100} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {routes.map((route) => (
              <Link
                key={route.id}
                href={route.href}
                className="text-gray-800 hover:text-black transition-colors"
              >
                {route.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button className="gap-2.5">
              Download App
              <ArrowRight className="bg-white text-black rounded-full p-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 backdrop-blur-sm z-30"
            onClick={closeMobileMenu}
          />
        )}

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden fixed top-[92px] left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out z-40 ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col p-6 space-y-4">
            {routes.map((route) => (
              <Link
                key={route.id}
                href={route.href}
                onClick={closeMobileMenu}
                className="text-gray-800 hover:text-black transition-colors py-2 text-lg"
              >
                {route.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Button className="gap-2.5 w-full" onClick={closeMobileMenu}>
                Download App
                <ArrowRight className="bg-white text-black rounded-full p-1" />
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
