import { Globe } from "lucide-react";
import { useState } from "react";

const LANGS = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "hi", label: "हिन्दी" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "zh", label: "中文" },
];

export default function LanguageSwitcher({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const current = LANGS.find(l => l.code === value) || LANGS[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition text-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4" /> {current.label}
      </button>
      {open && (
        <ul className="absolute right-0 mt-2 w-40 rounded-lg bg-black/80 backdrop-blur border border-white/10 text-white shadow-lg p-1 max-h-64 overflow-auto" role="listbox">
          {LANGS.map(lang => (
            <li key={lang.code}>
              <button
                className="w-full text-left px-3 py-2 rounded hover:bg-white/10"
                onClick={() => { onChange?.(lang.code); setOpen(false); }}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
