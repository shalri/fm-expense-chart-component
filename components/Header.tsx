export default function Header() {
  return (
    <header className="mb-6 w-full bg-zinc-200 py-3">
      <nav className="container mx-auto flex items-center justify-between p-3">
        <h1 className="text-lg font-bold">次に (tsugini)</h1>
        <h2>
          <a
            href="https://github.com/shalri/soko"
            className="font-semibold text-zinc-700 hover:text-zinc-800"
          >
            tsugini &middot; repo
          </a>
        </h2>
      </nav>
    </header>
  );
}
