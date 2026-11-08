import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Madhav — Building systems. Investigating ideas.',
  description: 'Engineering work and independent investigations into intelligence, abstraction, information, and complex systems.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
