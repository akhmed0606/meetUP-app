import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./Navigation.module.css";
import FavoriteContext from "../../store/favorite-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <img
        src="https://www.nicepng.com/png/full/266-2663230_com-has-an-unintended-cryptocurrency-community-interest-meetup.png"
        alt="Logo"
        className={classes.logo}
      ></img>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meet">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
