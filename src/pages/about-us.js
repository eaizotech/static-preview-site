import Head from "next/head";
import Header from "../components/Header";
import AboutUS from "../components/AboutUS";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="About Us: eaizo"
        description="About eaizo"
        canonical="https://eaizo.com/"
        openGraph={{
          url: "https://eaizo.com/",
        }}
      />
      <Head>
        <title>eaizo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-[55vh]">

      <AboutUS />
      </div>

      <Footer />
    </div>
  );
}
