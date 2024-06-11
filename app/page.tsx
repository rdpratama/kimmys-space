import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="p-5">
        <Navbar />
      </div>

      <div className="px-5">
        <Hero />
      </div>
    </main>
  );
}
