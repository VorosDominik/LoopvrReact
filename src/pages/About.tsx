export default function About() {
  return (
    <section className="grid gap-6 text-slate-100">
      <div className="rounded-[2rem] border border-red-500/40 bg-[#120306]/95 p-6 shadow-[0_20px_75px_rgba(255,0,0,0.14)] backdrop-blur-xl">
        <h2 className="text-3xl font-black uppercase tracking-[0.18em] text-red-300 drop-shadow-[0_0_8px_rgba(248,113,113,0.6)]">
          About
        </h2>
        <p className="mt-3 text-slate-300">
          Ez a LoopVörös alap demófelület Tailwind stílussal.
        </p>
      </div>
      <div className="rounded-[2rem] border border-red-500/20 bg-[#0f0205]/95 p-5 shadow-[0_12px_35px_rgba(255,0,0,0.12)]">
        <p className="text-slate-300">
          A dizájn egy sötét képregényes hangulatot ad vissza: fekete alapon
          vörös fények, éles panelek és erőteljes tipográfia.
        </p>
      </div>
    </section>
  );
}
