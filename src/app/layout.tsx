import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My To-Do App',
  description: 'A simple task management app built with Next.js 14',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <>
    <html lang="en">
    <body>
    <div>
      {children}
    </div>
    </body>
    </html>
  </>
    ;
}
