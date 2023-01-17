import Head from 'next/head';
import Header from '../../navigation/header/Header';

export default function SecondaryLayout({ children, ...divProps }) {
  return (
    <>
      <Head>
        <title>OpenLake</title>
      </Head>
      <div>
        <Header />
        <main className="px-5">{children}</main>
        <div className="m-auto" />
      </div>
    </>
  );
}
