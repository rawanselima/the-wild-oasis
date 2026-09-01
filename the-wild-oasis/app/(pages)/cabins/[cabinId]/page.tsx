import { getCabinDetails } from '@/app/services/cabins';
import CabinData from './components/CabinData';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ cabinId: string }>;
};

export async function generateMetadata({ params }: Props) {
    const { cabinId } = await params;
    const cabin = await getCabinDetails(cabinId);
    return {
        title: cabin ? `Cabin ${cabin.name}` : 'Cabin Not Found',
    };
}

export default async function CabinPage({ params }: Props) {
    const { cabinId } = await params;
    const cabin = await getCabinDetails(cabinId);

    if (!cabin) notFound();

    return (
        <div className="max-w-6xl mx-auto">
            <CabinData cabin={cabin} />
        </div>
    );
}
