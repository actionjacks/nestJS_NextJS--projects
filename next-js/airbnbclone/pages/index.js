import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Fake AirBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nerby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by airbnb"
          buttonText="Get inspired"
        />
      </main>

      <Footer />
    </div>
  );
}
//todo DEV custom API GET dummy_data
export async function getStaticProps(context) {
  const exploreData = await fetch("https://jsonkeeper.com/b/4G1G").then((res) =>
    res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return { props: { exploreData, cardsData } };
}
