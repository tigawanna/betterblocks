import { Listings } from '@/components/listings/Listings';
import { ListingsCardLoader } from '@/components/listings/ListingsCardLoader';
import { Suspense } from 'react';
import { HeroSection } from '@/components/root/HeroSection';

export interface PageProps {
  params: Record<string, string | undefined>;
  searchParams: {
    q?: string;
    p?: number;
  };
}

export default function HomePage({ searchParams }: PageProps) {
  return (
    <section className="flex flex-col  h-full gap-2 min-h-screen">
      <HeroSection />

      <Suspense fallback={<ListingsCardLoader no={12} />}>
        <Listings searchParams={searchParams} show_controls={false} />
      </Suspense>
    </section>
  );
}
