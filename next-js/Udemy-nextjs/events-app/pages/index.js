import Head from "next/head";
import Link from "next/link";
import EventList from "../components/events/event-list";
//import { getFeaturedEvents } from "../dummy-data"; //data from file
import { getFeaturedEvents } from "../helpers/api-util"; // data from onlineDB

function HomePage({ events }) {
  //const deaturedEvents = getFeaturedEvents();//for data from file

  return (
    <div>
      <Head>
        <title>Lorem</title>
        <meta name="description" content="lorem ipsum" />
      </Head>
      <EventList items={events} />
    </div>
  );
}
export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800, //generate new page after 1.5h
  };
}
