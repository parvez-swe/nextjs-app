import React from "react";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "content-type": "aplication/json",
      },
    });
    const data = await response.json();

    console.log(data);
    router.push("/");
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;

// import React from "react";
// import { useRouter } from "next/router";
// import NewMeetupForm from "../../components/meetups/NewMeetupForm";

// function NewMeetupPage() {
//   const router = useRouter();

//   async function addMeetupHandler(enteredMeetupData) {
//     const response = await fetch("/api/new-meetup", {
//       method: "POST",
//       body: JSON.stringify(enteredMeetupData),
//       headers: {
//         "content-type": "aplication/json",
//       },
//     });
//     const data = await response.json();

//     console.log(data);
//     router.push("/");
//   }
//   return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
// }

// export default NewMeetupPage;
