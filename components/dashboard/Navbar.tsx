export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-800 bg-[#111111] px-4 sm:px-6">
      <h2 className="text-lg font-semibold text-gray-100 sm:text-xl">
        Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <div className="h-8 w-8 rounded-full bg-gray-400" />
      </div>
    </header>
  );
}
