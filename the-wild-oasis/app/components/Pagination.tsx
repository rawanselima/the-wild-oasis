"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({
  count,
  pageSize = 10,
}: {
  count: number;
  pageSize?: number;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / pageSize);

  if (pageCount <= 1) return null;

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", next.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", prev.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function setPage(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  // Generate page numbers
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="p-2 rounded-full hover:bg-yellow hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      <div className="flex items-center gap-1">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              currentPage === page
                ? "bg-yellow text-slate-900 font-bold"
                : "hover:bg-yellow/20 text-slate-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={nextPage}
        disabled={currentPage === pageCount}
        className="p-2 rounded-full hover:bg-yellow hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}