import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* Routes for community, sessions, chat, reminders can be added iteratively */}
    </Routes>
  );
}

export default App
