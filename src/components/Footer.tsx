export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ricci Investments. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          Data updated daily | Contact: info@ricciinvestments.com
        </p>
      </div>
    </footer>
  );
}