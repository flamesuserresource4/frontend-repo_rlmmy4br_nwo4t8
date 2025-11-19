import { Languages, HeartHandshake, Brain, Bell, UsersRound } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "All languages",
    desc: "Designed for every age and language — easy for seniors with clear UI and localization.",
  },
  {
    icon: Brain,
    title: "AI-driven care",
    desc: "Emotion-aware chat support and personalized self-care suggestions.",
  },
  {
    icon: HeartHandshake,
    title: "Real counselors",
    desc: "Verified professionals for high-quality sessions and recovery planning.",
  },
  {
    icon: UsersRound,
    title: "Social by age",
    desc: "Meaningful interactions between age groups to build understanding.",
  },
  {
    icon: Bell,
    title: "Wellness reminders",
    desc: "Gentle nudges to keep you grounded and consistent.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Built for care at scale</h2>
        <p className="text-white/70 text-center mt-3 max-w-2xl mx-auto">Sahara blends AI insights with human empathy to provide continuous support.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/10 transition">
              <f.icon className="h-6 w-6 text-cyan-400" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
