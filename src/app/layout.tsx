import './globals.css';
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: 'UnifiedBeez',
  description:
    'An App that helps you keep track of your messages and keep everything in one place.',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
