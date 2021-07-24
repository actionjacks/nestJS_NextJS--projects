import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    const router = useRouter();

    console.log(enteredMeetupData);

    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add new meetup</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
