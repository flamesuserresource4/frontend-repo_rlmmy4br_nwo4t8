import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">
          Sahara — Emotional wellness for everyone
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
          AI support + real counselors + community. Reduce stress and loneliness with multilingual care, reminders, and live sessions.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to="/login" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/community" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition">
            Explore Community
          </Link>
        </div>
      </div>
    </section>
  );
}
