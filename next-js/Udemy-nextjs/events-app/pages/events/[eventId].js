import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/error-alert/error-alert";

import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;

  const event = getEventById(eventId); //get event from dummy_data

  if (!event) return <ErrorAlert>No event found!</ErrorAlert>;

  return (
    <>
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
