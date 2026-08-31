import React, { Suspense } from 'react'
import CabinBox from './components/CabinBox';
import { getCabins } from '@/app/services/cabins';
import Spinner from '@/app/components/Spinner';
import Pagination from '@/app/components/Pagination';

// In Next.js 15+, searchParams is a Promise
const Cabins = async ({ searchParams }: { searchParams: Promise<{ page?: string }> }) => {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? Number(resolvedSearchParams.page) : 1;
  const limit = 10; // Adjust this limit as needed (e.g., 4 cabins per page)
  
  let cabins = [];
  let count = 0;
  try {
    const res = await getCabins(page, limit);
    cabins = res.data || [];
    count = res.count || 0;
  } catch (error) {
    console.error("Error loading cabins:", error);
  }

  return (
    <div>
      <h1 className="text-4xl mb-5 text-yellow font-medium">
        Our Luxury Cabins
      </h1>

      <p className="text-light-gray mb-10 text-lg">
        Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful mountain views, spending your days exploring the dark forests around, or just relaxing in your private hot tub under the stars. Enjoy nature's beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise.
      </p>

      <Suspense fallback={<Spinner />} key={page}>
        {cabins.length > 0 ? (
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {cabins.map((cabin) => (
              <CabinBox cabin={cabin} key={cabin.id} />
            ))}
          </div>
        ) : (
          <p>No cabins found.</p>
        )}
      </Suspense>

      {/* Include the Pagination component if there is data */}
      {count > 0 && <Pagination count={count} pageSize={limit} />}
    </div>
  )
}

export default Cabins