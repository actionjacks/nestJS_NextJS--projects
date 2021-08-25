import { useRouter } from "next/router";

import EventSearch from "../../components/event-search/events-search";
import EventList from "../../components/events/event-list";

import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

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
