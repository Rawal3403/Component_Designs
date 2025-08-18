import "./App.css";
import Cards from "./pages/Cards";

function App() {
  return (
    <div className="bg-black h-screen">
      <div
        aria-label="Design credit"
        className="fixed right-4 bottom-4 z-50 select-none"
      >
        <div className="group relative">
          <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 blur opacity-50 group-hover:opacity-80 transition" />
          <div className="relative rounded-xl bg-neutral-900/80 backdrop-blur px-4 py-2 text-xs md:text-sm font-medium text-white shadow-lg ring-1 ring-white/10">
            Designed by <span className="font-semibold">Rawal Hassan</span>
          </div>
        </div>
      </div>
      <div className="h-screen" data-theme="light">
        <Cards />
      </div>
    </div>
  );
}

export default App;
