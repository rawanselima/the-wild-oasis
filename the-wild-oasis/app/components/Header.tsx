import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="px-8 py-5 z-20">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-4 z-20">
          <Image
            src="/assets/logo (1).png"
            alt="The Wild Oasis logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-xl font-semibold tracking-tight text-white">
            The Wild Oasis
          </span>
        </Link>

        <nav className="z-20 text-lg">
          <ul className="flex items-center gap-8 text-slate-200">
            <li>
              <Link href="/cabins" className="hover:text-white transition-colors">Cabins</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
            </li>
            <li>
              <Link href="/profile" className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm">
                  R
                </span>
                <span>Guest area</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;