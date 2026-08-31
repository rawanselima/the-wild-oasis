import { Suspense } from 'react'
import CabinList from './components/CabinList';
import Spinner from '@/app/components/Spinner';
import Filter from '@/app/components/Filter';

// In Next.js 15+, searchParams is a Promise
const Cabins = async ({ searchParams }: { searchParams: Promise<{ page?: string, capacity?: string }> }) => {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? Number(resolvedSearchParams.page) : 1;
  const capacity = resolvedSearchParams.capacity ?? 'all';
  const limit = 10; // Adjust this limit as needed (e.g., 4 cabins per page)

  return (
    <div>
      <h1 className="text-4xl mb-5 text-yellow font-medium">
        Our Luxury Cabins
      </h1>

      <p className="text-light-gray mb-10 text-lg">
        Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful mountain views, spending your days exploring the dark forests around, or just relaxing in your private hot tub under the stars. Enjoy nature's beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter
          filterField="capacity"
          options={[
            { label: 'All cabins', value: 'all' },
            { label: '2–3 guests', value: 'small' },
            { label: '4–7 guests', value: 'medium' },
            { label: '8–12 guests', value: 'large' },
          ]}
        />
      </div>

      {/* key forces Suspense to remount and show fallback on every navigation */}
      <Suspense fallback={<Spinner />} key={`${page}-${capacity}`}>
        <CabinList page={page} limit={limit} capacity={capacity} />
      </Suspense>
      
    </div>
  )
}

export default Cabins