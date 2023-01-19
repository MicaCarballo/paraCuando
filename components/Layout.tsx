/* Props information:
  children: Content of the page
  title: Title of the page
  description: metatag for SEO
*/

import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface props {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = 'Para Cuando?',
  description = 'Website oficial',
}: props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="../styles/globals.css" />
      </Head>
      <div>
        <Header />
        <main className="max-w-7xl mx-auto min-h-screen bg-slate-700">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
