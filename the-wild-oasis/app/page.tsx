import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image
        src="/assets/bg.png"
        fill
        className="object-cover object-top -z-10"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center mt-24">
        <h1 className="text-5xl md:text-8xl text-slate-100 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-yellow px-8 py-6 text-gray text-lg font-semibold hover:bg-[#b88c55] transition-all inline-block"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
