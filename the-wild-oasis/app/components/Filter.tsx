'use client';

import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type FilterOption = {
  label: string;
  value: string;
};

interface FilterProps {
  filterField: string;
  options: FilterOption[];
}

const Filter = ({ filterField, options }: FilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // If no filter is in the URL, default to the first option, or you can default to 'all' depending on the logic.
  const currentFilter = searchParams.get(filterField) || options[0]?.value || '';

  const handleFilter = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(filterField, value);
    // Reset page to 1 when a filter is changed
    if (params.has('page')) {
      params.set('page', '1');
    }
    // Update the URL
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="border border-gray flex border-solid rounded-sm">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleFilter(option.value)}
          className={`px-5 py-2 hover:bg-gray hover:text-white transition-colors ${
            currentFilter === option.value
              ? 'bg-gray text-white'
              : 'text-light-gray'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Filter;
