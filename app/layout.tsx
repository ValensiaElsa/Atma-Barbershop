import '@/app/ui/global.css';
import { kanit,anton } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Atma Barbershop',
    default: 'Atma Barbershop',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={`${kanit.className} ${anton.className} antialiased`}>{children}</body>
    </html>
  );
}
