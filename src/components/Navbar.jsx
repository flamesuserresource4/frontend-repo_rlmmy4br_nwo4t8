import { Globe, Menu, MessageCircleHeart, HeartHandshake } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/20" />
          <span className="font-semibold tracking-tight">Sahara</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link to="/community" className="hover:text-white transition inline-flex items-center gap-2">
            <MessageCircleHeart className="h-4 w-4" /> Community
          </Link>
          <Link to="/sessions" className="hover:text-white transition inline-flex items-center gap-2">
            <HeartHandshake className="h-4 w-4" /> Sessions
          </Link>
          <Link to="/chat" className="hover:text-white transition">AI Chat</Link>
          <Link to="/reminders" className="hover:text-white transition">Reminders</Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link to="/login" className="px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition text-sm">Login</Link>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 text-white/90 hover:text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
