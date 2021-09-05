import Head from "next/head";
import Link from "next/link";

import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";

import { useRouter } from "next/router";
//import { getEventById } from "../../dummy-data";//data from file
import { getEventById, getFeaturedEvents } from "../../helpers/api-util"; //data forom onlineDB

function EventDetailPage({ selectedEvent }) {
  //const router = useRouter();
  //const eventId = router.query.eventId;

  //const event = getEventById(eventId); //get event from dummy_data
  const event = selectedEvent; //from props selected event

  if (!event) return <ErrorAlert>No event found!</ErrorAlert>;

  return (
    <>
      <Head>
        <title>{selectedEvent.title}</title>
        <meta name="description" content={selectedEvent.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
export default EventDetailPage;

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const event = await getEventById(eventId);

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  //need to tell nexjs all pages can be generated
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: true,
  };
}
