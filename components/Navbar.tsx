"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Dashboard", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Analytics", href: "/analytics" },
  { name: "Teamates", href: "/team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#030412]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-3 w-3 bg-[#57db96] rounded-full animate-pulse"></div>
          <span className="text-xl font-semibold tracking-tight text-white">
            Chronos<span className="text-[#57db96]">AI</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-all ${
                pathname === link.href
                  ? "text-[#57db96]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-sm text-neutral-300 hover:text-white"
          >
            + New Task
          </Button>
          <Avatar className="cursor-pointer hover:scale-105 transition-transform">
            <AvatarImage src="/assets/user-avatar.png" alt="user avatar" />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#06091f] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname === link.href
                  ? "text-[#57db96]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#57db96] text-black hover:bg-[#57db96]/80">
            + New Task
          </Button>
        </div>
      )}
    </header>
  );
}
