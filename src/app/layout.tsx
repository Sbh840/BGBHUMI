
import type {Metadata} from 'next';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase/client-provider';

export const metadata: Metadata = {
  title: 'banglarbhumigov.in | LAND AND LAND REFORMS AND REFUGEE RELIEF AND',
  description: 'Search Khatian and Plot information with AI-powered terminology explanations.',
  icons: {
    icon: '/faviconV2.png',
    shortcut: '/faviconV2.png',
    apple: '/faviconV2.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/faviconV2.png" />
        <link rel="shortcut icon" href="/faviconV2.png" />
        <link rel="apple-touch-icon" href="/faviconV2.png" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <FirebaseClientProvider>
          {children}
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
