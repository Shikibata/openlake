import Head from 'next/head';
import Footer from '../../navigation/footer/Footer';
import Header from '../../navigation/header/Header';

export default function PrimaryLayout({ children, ...divProps }) {
  return (
    <>
      <Head>
        <title>OpenLake</title>
      </Head>
      <div>
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
}
