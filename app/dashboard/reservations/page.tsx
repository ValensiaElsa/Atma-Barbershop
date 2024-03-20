import ReservationsTable from '@/app/ui/reservations/table';
export default function Page() {
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
      <ReservationsTable query="2024-06-05" currentPage={1} />
    </main>
  );
}