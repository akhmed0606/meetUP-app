import classes from "./MeetItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import FavoriteContext from "../../store/favorite-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoriteContext);

  const itemIsFavorites = favoritesCtx.itemIsFavorites(props.id);

  function toggleFavorite() {
    if (itemIsFavorites) {
      favoritesCtx.removeFavorites(props.id);
    } else {
      favoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <div className={classes.actions}>
            <button onClick={toggleFavorite} className={classes.actions}>
              {itemIsFavorites ? <FcLike /> : <AiOutlineHeart />}
            </button>
          </div>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
