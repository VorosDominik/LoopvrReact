import NavBar from "./navbar/NavBar";

export default function Conntrol() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[96rem] flex-col gap-4 px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
      <header className="relative overflow-hidden rounded-[1.25rem] border-4 border-[#2a1209] bg-[#f4c55d] p-4 shadow-[8px_8px_0_#2a1209,0_18px_45px_rgba(0,0,0,0.35)] sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.34)_0_1px,transparent_1px_9px)] opacity-45" />
        <div className="relative">
          <h1 className="comic-title text-4xl font-black uppercase text-[#fff3bf] sm:text-5xl">
            LOOP<span className="text-[#ff4a2f]">VÖRÖS</span>
          </h1>
          <p className="mt-2 max-w-2xl rounded-lg border-2 border-[#2a1209] bg-[#fff0b8] px-4 py-2 text-base font-extrabold text-[#4b210e] shadow-[4px_4px_0_#2a1209] sm:text-lg">
            A képregényes, fantasy harci felület.
          </p>
        </div>
      </header>

      <NavBar />
    </div>
  );
}
