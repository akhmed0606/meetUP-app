import { useContext } from 'react';
import FavoriteContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetList';
import classes from '../components/ui/Card.module.css';

function Favorites() {
 const favoritesCtx = useContext(FavoriteContext);

 let content;
 if (favoritesCtx.totalFavorites === 0) {
     content = <h3 className={classes.text}>No favorite meetups added yet...</h3>
 }else {
   content = <MeetupList meetups={favoritesCtx.favorites} />
 }

    return (
        <section>
       <h1 className={classes.text}>My Favorites</h1>
       {content}
        </section>
           
    )
}
export default Favorites;