"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email) return;

    try {
      setLoading(true);

      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        toast("Something went wrong");
        throw new Error("Failed to join waitlist");
      }

      setEmail("");
      toast("Successfully joined the waitlist!");
      console.log("Success: ", await res.json());
    } catch (err) {
      console.error("Error joining waitlist: ", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative flex h-full min-h-screen w-screen flex-col items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/background.jpeg"
          fill
          priority
          className="object-cover object-center select-none"
          alt="Background Image"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <h2 className="relative py-2 text-center font-sans text-5xl font-extrabold tracking-tight md:py-10 lg:text-8xl">
        Join the Waitlist
      </h2>

      <p className="text-md mx-auto px-2 text-center md:max-w-xl lg:text-lg">
        Our new website is currently under development. Join the waitlist to be
        the first to know when we launch! We appreciate your patience and
        support.
      </p>

      <form
        onSubmit={handleSubmit}
        className="relative mt-4 flex w-full max-w-md flex-col items-center gap-3 rounded-full p-4 lg:flex-row lg:p-1"
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="dark:bg-input/70 h-12 w-full rounded-md border-1 ring-0 focus-visible:ring-0 focus-visible:outline-none active:ring-0 active:outline-0"
          placeholder="Enter your email"
          type="email"
          required
        />

        <Button
          type="submit"
          disabled={!email || loading}
          className={cn(
            "h-12 w-full rounded-md lg:w-fit",
            "ring-0 focus-visible:ring-0 focus-visible:outline-none active:ring-0 active:outline-0",
          )}
          size="lg"
        >
          {loading ? "Joining..." : "Join the Waitlist"}
        </Button>
      </form>
    </section>
  );
}
