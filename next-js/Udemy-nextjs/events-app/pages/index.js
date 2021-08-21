import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const deaturedEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={deaturedEvents} />
    </div>
  );
}
export default HomePage;
