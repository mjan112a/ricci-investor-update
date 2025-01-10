import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">Ricci Investor Update</h1>
        <nav className="mt-2">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}