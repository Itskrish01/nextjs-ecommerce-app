import { Poppins } from "next/font/google";
import Layout from "@/components/layoutComps/Layout";
import HomePage from "@/components/PageComponents/HomePage";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={poppins.className}>
      <Layout>
        <HomePage />
      </Layout>
    </main>
  );
}
