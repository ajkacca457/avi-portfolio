export default function Footer() {
  return (
    <footer className="bg-vsc-statusbar">
      <div className="container-main px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-7">

          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="text-white text-xs font-mono flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 1L7.5 4.5H11L8.5 6.5L9.5 10L6 8L2.5 10L3.5 6.5L1 4.5H4.5L6 1Z" fill="currentColor" />
              </svg>
              main
            </span>
            <span className="text-white text-xs font-mono opacity-75 hidden sm:inline">0 errors</span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <span className="text-white text-xs font-mono opacity-75 hidden md:inline">TypeScript</span>
            <span className="text-white text-xs font-mono opacity-75 hidden md:inline">UTF-8</span>
            <span className="text-white text-xs font-mono opacity-75 hidden sm:inline">Helsinki, Finland</span>
            <span className="text-white text-xs font-mono opacity-75">© 2026 Avijit Karmaker</span>
          </div>

        </div>
      </div>
    </footer>
  );
}