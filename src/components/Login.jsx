import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Signing in...");
    try {
      const base = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${base}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Login failed");
      setStatus(`Welcome! Token: ${data.token}`);
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl bg-white/5 border border-white/10 p-6">
        <h2 className="text-2xl font-semibold">Login</h2>
        <p className="text-white/70 text-sm mt-1">Sign in to continue your wellness journey</p>
        <div className="mt-6 space-y-4">
          <input
            className="w-full bg-white/10 border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-cyan-400"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full bg-white/10 border border-white/10 rounded-lg p-3 outline-none focus:ring-2 focus:ring-cyan-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-cyan-500 hover:bg-cyan-400 transition rounded-lg p-3 font-semibold">
            Continue
          </button>
          {status && <p className="text-sm text-white/80">{status}</p>}
        </div>
      </form>
    </div>
  );
}
