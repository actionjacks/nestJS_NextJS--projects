import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/error-alert/error-alert";
import Button from "../../ui/button";

//import { getFilteredEvents } from "../../dummy-data";//data from file
import { getFilteredEvents } from "../../helpers/api-util"; //data from onlinefile

function FilteredEventsPage({ hasError, events, dates }) {
  const router = useRouter();

  // const filterData = router.query.slug;
  // //console.log(filterData); //array from querys after events/..

  // if (!filterData) return <p className="center">Loading...</p>;

  // const filteredYear = filterData[0];
  // const filteredMonth = filterData[1];

  // const numYear = +filteredYear;
  // const numMonth = +filteredMonth;

  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = events;

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

  const date = new Date(dates.year, dates.month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}
export default FilteredEventsPage;

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

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
    return {
      //new props to difrent props
      props: { hasError: true },
      // notFound: true,
      // can redirect to error page
      // redirect: {
      //   destination: "/error",
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      dates: {
        year: numYear,
        month: numMonth,
      },
    },
  };
}
