import CabinBox from './CabinBox';
import { getCabins } from '@/app/services/cabins';
import Pagination from '@/app/components/Pagination';

interface CabinListProps {
  page: number;
  limit: number;
  capacity: string;
}

const CabinList = async ({ page, limit, capacity }: CabinListProps) => {
  let cabins = [];
  let count = 0;

  try {
    const res = await getCabins(page, limit, capacity);
    cabins = res.data || [];
    count = res.count || 0;
  } catch (error) {
    console.error("Error loading cabins:", error);
  }

  if (cabins.length === 0) {
    return <p className="text-light-gray text-lg">No cabins found.</p>;
  }

  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {cabins.map((cabin) => (
          <CabinBox cabin={cabin} key={cabin.id} />
        ))}
      </div>

      {count > 0 && <Pagination count={count} pageSize={limit} />}
    </>
  );
}

export default CabinList;
