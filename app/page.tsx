"use client";
import TimeOrb from "@/components/TimeOrb";
import IntentCard from "@/components/IntentCard";

export default function Home() {
  return (
    <section className="flex flex-col gap-10">
      <h1 className="text-4xl font-bold">Your Orbit Today ☀️</h1>
      <TimeOrb />
      <IntentCard />
    </section>
  );
}
