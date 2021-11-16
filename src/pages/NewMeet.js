import NewMeetForm from "../components/meetups/NewMeetForm";
import { useHistory } from "react-router-dom";
import classes from "../components/ui/Card.module.css";

function NewMeetPage() {
  const history = useHistory();

  function addMeetHandler(meetUpData) {
    fetch(
      "https://react-first-project-65500-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "Post",
        body: JSON.stringify(meetUpData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1 className={classes.text}>Please fill out this form</h1>
      <NewMeetForm onAddMeeting={addMeetHandler} />
    </section>
  );
}
export default NewMeetPage;
