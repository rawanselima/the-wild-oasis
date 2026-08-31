import Image from 'next/image';
import Link from 'next/link';
import { UsersIcon } from '@heroicons/react/24/solid';
import { Cabin } from '@/app/types/cabins';
import Spinner from '@/app/components/Spinner';
import ImageLoader from '@/app/components/ImageLoader';

interface CabinBoxProps {
  cabin: Cabin;
}

function CabinBox({ cabin }: CabinBoxProps) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <div className="flex border border-gray">
      <div className="flex-1 min-w-[200px] relative min-h-[200px]">
             
        <ImageLoader image={image} name={name} className='w-full h-full object-cover' />
      
          </div>

      <div className="flex-grow basis-[60%] flex flex-col">
        <div className="p-8 pb-2 flex-grow">
          <h3 className="text-yellow text-4xl font-semibold mb-2">
           Cabin {name}
          </h3>

          <div className="flex items-center gap-4 mb-2">
            <UsersIcon className="h-6 w-6 text-gray" />
            <p className="text-lg text-slate-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>
          
          <div className="flex justify-end mt-8">
            <p className="flex items-baseline gap-2">
              <span className="text-4xl text-slate-100 font-light">${regularPrice}</span>
              <span className="text-slate-300">/ night</span>
            </p>
          </div>
        </div>

        <div className="border-t border-gray flex justify-end">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-gray py-4 px-8 hover:bg-gray transition-colors hover:text-slate-100"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinBox;
