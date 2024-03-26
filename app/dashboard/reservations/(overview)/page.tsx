import ReservationsTable from '@/app/ui/reservations/table';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { CreateReservations } from '@/app/ui/reservations/buttons';
import { fetchLatestReservations } from '@/app/lib/data';
import { Suspense } from 'react';
import {ReservationsTableSkeleton, CreateReservationsSkeleton, SearchReservationsSkeleton} from '@/app/ui/skeletons';

export default async function Page() {
  const latestReservations = await fetchLatestReservations ();
  return (
    <main className="flex min-h-screen flex-col">
      <p>
        Reservation Pages
      </p>
      <p>
        221711705
      </p>
      <p>
        Valensia Elsa Kurnia
      </p>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      <Suspense fallback={<SearchReservationsSkeleton />}>
          <Search placeholder="Search reservations..." />
          </Suspense>
          <Suspense fallback={<CreateReservationsSkeleton />}>
          <CreateReservations />
          </Suspense>
      </div>
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
      <Suspense fallback={<ReservationsTableSkeleton />}>
        <ReservationsTable query="" currentPage={1} />
        </Suspense>
    </main>
  );
}