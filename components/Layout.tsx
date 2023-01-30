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
  hideBar?: boolean;
}

export default function Layout({
  children,
  title = 'Para Cuando?',
  description = 'Website oficial',
  hideBar,
}: props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div>
        <Header />
        <div className="mx-auto min-h-screen">{children}</div>
        <Footer hideBar={hideBar} />
      </div>
    </>
  );
}
