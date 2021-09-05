import { useRouter } from "next/router";

import EventSearch from "../../components/event-search/events-search";
import EventList from "../../components/events/event-list";

//import { getAllEvents } from "../../dummy-data";//data from file
import { getAllEvents } from "../../helpers/api-util"; //data from onlineDB

function AllEventsPage({ events }) {
  const router = useRouter();
  //const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}
export default AllEventsPage;

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
