export function ComingSoon() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#1f1410]">
      <div className="text-center px-6">
        <h1 className="text-fw-accent mb-8 text-[clamp(2.5rem,6vw,5rem)] font-serif font-bold tracking-[0.08em]">
          COMING SOON
        </h1>
        <p className="text-fw-ribbon text-[clamp(1rem,2vw,1.5rem)] font-serif tracking-[0.16em]">
          This page is under construction
        </p>
        <button
          onClick={() => window.history.back()}
          className="text-fw-accent hover:text-white mt-12 border-2 border-current px-8 py-4 font-serif text-[clamp(0.9rem,1.5vw,1.2rem)] font-bold tracking-[0.16em] transition-colors duration-300"
        >
          GO BACK
        </button>
      </div>
    </div>
  );
}
