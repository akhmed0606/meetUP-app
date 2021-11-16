import { useState, useEffect } from 'react'
import MeetupList from '../components/meetups/MeetList';

function AllMeetsPage() {
   const [isLoading, setIsLoading] = useState(true);
   const [loadedMeetings, setLoadedMeetings] = useState([]);
   
   useEffect(() => {
    fetch('https://react-first-project-65500-default-rtdb.firebaseio.com/meetups.json').then(res => {
      return res.json();
    })
    .then((data) => {
     const meetups = [];

     for (const key in data) {
       const meetup = {
         id:key,
         ...data[key]
       };
       meetups.push(meetup);
     }

        setIsLoading(false);
        setLoadedMeetings(meetups)
    });
   },[]);
     
    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }

    return (
        <section> 
          <MeetupList meetups={loadedMeetings} />
        </section>
    );
}
export default AllMeetsPage;