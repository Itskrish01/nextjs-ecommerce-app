import { Poppins } from "next/font/google";
import Layout from "@/components/layoutComps/Layout";
import HomePage from "@/components/PageComponents/HomePage";
import Head from "next/head";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Buletin</title>
      </Head>
      <main className={poppins.className}>
        <Layout>
          <HomePage />
        </Layout>
      </main>
    </>
  );
}
