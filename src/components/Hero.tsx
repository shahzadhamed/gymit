import Image from "next/image";
import { Dumbbell, Users, Trophy, Clock, MapPin, MessageCircle, QrCode } from "lucide-react";

const packages = [
  { title: "General Training", price: "15,000" },
  { title: "Personal Training Complete", price: "30,000" },
  { title: "Day Pass", price: "2,000" },
  { title: "Week Pass", price: "6,000" },
  { title: "2 Week Pass", price: "10,000" },
];

export default function Hero() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black px-8 py-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">

          <div className="mb-8 flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2">
            <span className="text-xs font-semibold tracking-widest text-green-400">
              LIFESTYLE · FITNESS · NUTRITION
            </span>
          </div>

          <h1 className="text-6xl font-black leading-[1.05] md:text-8xl">
            BUILD YOUR
            <span className="block text-green-500">STRONGEST VERSION</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-400">
            Train smarter with expert coaches, modern equipment, and
            personalized programs designed for your goals.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-green-400">
              Join Now
            </button>
            <button className="rounded-full border border-green-500 px-8 py-4 font-semibold text-green-500 transition hover:scale-105 hover:bg-green-500 hover:text-black">
              Explore Programs
            </button>
          </div>

          <div className="mt-20 grid w-full grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
            {[
              { icon: Dumbbell, label: "Modern Equipment" },
              { icon: Users, label: "Expert Coaches" },
              { icon: Trophy, label: "Personal Training" }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="h-6 w-6 text-green-500" />
                <span className="text-xs font-medium text-gray-400">{label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-t border-green-500/10 px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-black md:text-5xl">
            TIME TO <span className="text-green-500">GYM</span>
          </h2>
          <p className="mt-2 text-center text-gray-400">
            Celebrating Health &amp; Fitness
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-2xl border border-green-500/30 bg-zinc-950 p-8 text-center transition hover:border-green-500 hover:shadow-[0_0_30px_-10px_theme(colors.green.500)]"
              >
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  {pkg.title}
                </h3>
                <div className="mx-auto mt-3 mb-5 h-px w-12 bg-green-500" />
                <p className="text-3xl font-black text-green-500">
                  {pkg.price}{" "}
                  <span className="text-base font-semibold text-white">PKR</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMING + MAP + WHATSAPP */}
      <section className="border-t border-green-500/10 px-8 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">

          {/* Timing */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-green-500 p-3">
                <Clock className="h-5 w-5 text-green-500" />
              </div>
              <h4 className="font-bold text-green-500">Timing</h4>
            </div>
            <div className="flex h-56 flex-col justify-center gap-2 rounded-2xl border border-green-500/30 bg-zinc-950 p-6">
              <p className="text-gray-300">Mon to Sat</p>
              <p className="text-2xl font-bold text-white">6:30AM - 1AM</p>
              <div className="my-2 h-px w-full bg-white/10" />
              <p className="text-gray-300">Sunday</p>
              <p className="text-2xl font-bold text-white">4AM - 8PM</p>
            </div>
          </div>

          {/* Map */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-green-500 p-3">
                <MapPin className="h-5 w-5 text-green-500" />
              </div>
              <h4 className="font-bold text-green-500">Find Us</h4>
            </div>
            <iframe
              title="GYMIT location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54427.98443613426!2d74.34079337572933!3d31.50358160046177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909e75958af99%3A0x38aba55cabd46887!2sGYMIT%20DHA%20Phase%206!5e0!3m2!1sen!2sde!4v1785845342323!5m2!1sen!2sde"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-56 w-full rounded-2xl border border-green-500/30 grayscale invert-[.92] contrast-[1.1]"
            />
          </div>

          {/* WhatsApp QR */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-green-500 p-3">
                <MessageCircle className="h-5 w-5 text-green-500" />
              </div>
              <h4 className="font-bold text-green-500">WhatsApp</h4>
            </div>
            <div className="flex h-56 flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-green-500/40 bg-zinc-950 p-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-lg border border-green-500/30 bg-white/5">
                <QrCode className="h-14 w-14 text-green-500/60" />
              </div>
              <span className="text-xs text-gray-400">Scan to chat with us</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}