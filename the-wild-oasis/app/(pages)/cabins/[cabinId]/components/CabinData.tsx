import Image from 'next/image';
import { UsersIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Cabin } from '@/app/types/cabins';
import ImageLoader from '@/app/components/ImageLoader';

type CabinDataProps = {
    cabin: Cabin;
};

const CabinData = ({ cabin }: CabinDataProps) => {
    const { name, description, image, maxCapacity } = cabin;

    const location = 'Dolomites (Italy)';

    // Truncate description for "Show more"
    const MAX_LENGTH = 220;
    const isLong = description?.length > MAX_LENGTH;
    const shortDesc = isLong ? description.slice(0, MAX_LENGTH) + '…' : description;

    return (
        <div className="min-h-[450px] grid grid-cols-[.8fr_1fr] gap-0 border border-gray overflow-visible">

            {/* ── Left: Image ── */}
            
            <div className="relative -my-8 min-h-[420px]">
                <ImageLoader
                    image={image}
                    name={`Cabin ${name}`}                  
                    className="object-cover"
                    containerClassName="h-full"
                />
                 
            </div>

            {/* ── Right: Details ── */}
            <div className="flex relative flex-col justify-between px-10 py-10">

            {/* Cabin name centered overlay */}
                <div className="absolute top-3 -left-40 right-0 w-full">
                    <div className="bg-dark-gray px-6 py-4 w-full">
                        <h1 className="text-6xl font-bold text-white leading-tight font-['Josefin_Sans',sans-serif]">
                            Cabin {name}
                        </h1>
                    </div>
                </div>

                {/* Description */}
                <div className="mt-30">
                    <p className="text-light-gray text-lg leading-relaxed">
                        {shortDesc}
                        {isLong && (
                            <span className="ml-1 text-[#8ab4cf] hover:text-white cursor-pointer transition-colors">
                                Show more
                            </span>
                        )}
                    </p>
                </div>

                {/* Info Items */}
                <ul className="space-y-4">

                    {/* Guests */}
                    <li className="flex items-center gap-4 text-ligth-gray text-sm font-bold">
                        <UsersIcon className="w-5 h-5 text-[#7ca5c0] shrink-0" />
                        <span>
                            For up to{' '}
                            <strong className="text-white font-bold">{maxCapacity}</strong>{' '}
                            guests
                        </span>
                    </li>

                    {/* Location */}
                    <li className="flex items-center gap-4 text-slate-300 text-sm  font-bold">
                        <MapPinIcon className="w-5 h-5 text-[#7ca5c0] shrink-0" />
                        <span>
                            Located in the heart of the{' '}
                            <strong className="text-white">
                                {location.split(' (')[0]}
                            </strong>{' '}
                            ({location.split(' (')[1]?.replace(')', '') ?? ''})
                        </span>
                    </li>

                    {/* Privacy */}
                    <li className="flex items-center gap-4 text-slate-300 text-sm">
                        <ShieldCheckIcon className="w-5 h-5 text-[#7ca5c0] shrink-0" />
                        <span>
                            Privacy <strong className="text-white font-bold">100%</strong> guaranteed
                        </span>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default CabinData;
