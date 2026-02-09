import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Quiroz Auto Heroes - Premium Auto Repair in Villa Park, IL',
  description: 'ASE-certified auto repair services in Villa Park. Expert mechanics, same-day service, and warranty included. Call us today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
