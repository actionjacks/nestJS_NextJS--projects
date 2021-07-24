import Head from "next/head";
import MeetupList from "./../components/meetups/MeetupList";

import { MongoClient } from "mongodb";

// const dummy = [
//   {
//     id: "m1",
//     title: "first title",
//     image:
//       "https://d1w82usnq70pt2.cloudfront.net/wp-content/uploads/2019/10/Planetstrike3.jpg",
//     address: "adres first",
//     description: "first meetup",
//   },
// ];

function HomePage(props) {
  console.log(props.meetups);
  return (
    <>
      <Head>
        <title>NEXTJS-notepad</title>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

//second way
// export async function getServerSideProps(context) {
//   //get context obj
//   const req = context.req;
//   const res = context.res;
//   //fetch data oonly on server site never client
//   return {
//     props: { meetups: dummy },
//   };
// }

//first way
//call before render useEffect and jsx, wait for resolve
//code run on server site

export async function getStaticProps(context) {
  // const meetupId = context.params.meetupId;
  // console.log(meetupId);
  const client = await MongoClient.connect(
    "mongodb+srv://jack:jack@jacek.nqpdz.mongodb.net/nextjsnotepads?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //render data after 10s
  };
}

export default HomePage;
