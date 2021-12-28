import NewMeetForm from "../components/meetups/NewMeetForm";
import { useNavigate } from "react-router-dom";
import classes from "../components/ui/Card.module.css";

function NewMeetPage() {
  const navigate = useNavigate();

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
<<<<<<< HEAD
      navigate("/", { replace: true });
=======
      navigate("/", {replace: true});
>>>>>>> f484b239773f3991e4e15cb0c9acdb488543a3b2
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

