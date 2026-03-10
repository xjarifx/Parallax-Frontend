const MobileBlocker = () => (
  <div className="bg-fw-cover fixed inset-0 z-[999] flex items-center justify-center">
    <div className="px-6 text-center">
      <h1 className="text-fw-accent mb-8 font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[0.08em]">
        Switch to Desktop Mode
      </h1>
      <p className="text-fw-ribbon font-serif text-[clamp(1rem,2vw,1.5rem)] tracking-[0.16em]">
        This site is only available in desktop view.
        <br />
        Please switch to desktop mode to continue.
      </p>
    </div>
  </div>
);

export default MobileBlocker;
