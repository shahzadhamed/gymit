export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-2xl font-bold">
        GYMIT
      </h1>

      <div className="flex gap-8">
        <a href="#">Home</a>
        <a href="#">Programs</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </div>

      <button className="rounded-lg bg-black px-5 py-2 text-white">
        Join Now
      </button>
    </nav>
  );
}