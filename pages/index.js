import Head from "next/head";
import {
  Blog,
  Header,
  Navbar,
  View,
  Reviews,
  Newsletter,
  Footer,
} from "../components/";

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Affiliate</title>
        <meta name="description" content="This maked by Bandit" />
        <link rel="icon" href="./logo.svg" />
      </Head>
      <Navbar />
      <main>
        <Header />
        <Blog />
        <View />
        <Reviews />
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
}
