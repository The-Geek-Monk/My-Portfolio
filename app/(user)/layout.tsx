import '../../styles/globals.css';
import clsx from 'clsx';
import local from 'next/font/local';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import Head from '../head';
import FlareCursor from '@/components/ui/FlareCursor';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

const graphik = local({
  src: [
    {
      path: '../../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold'
    }
  ],
  variable: '--font-graphik',
  display: 'swap'
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        graphik.variable,
        montserrat.className
      )}
    >
      <Head />

      <body className="bg-[#080809] transition ease">
        <Header />

        <main className="flex flex-col justify-center items-center mx-auto">
          <FlareCursor />

          {children}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
