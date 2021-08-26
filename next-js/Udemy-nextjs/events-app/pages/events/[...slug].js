import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/error-alert/error-alert";
import Button from "../../ui/button";

import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage(props) {
  const router = useRouter();

  const filterData = router.query.slug;
  console.log(filterData); //array from querys after events/..

  if (!filterData) return <p className="center">Loading...</p>;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  //change to number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>Invalid filter Please adjust your values</ErrorAlert>
        <div className="center">
          <Button link="/events">Go back</Button>
        </div>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>No events found !</ErrorAlert>
        <div className="center">
          <Button link="/events">Go back</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
export default FilteredEventsPage;
