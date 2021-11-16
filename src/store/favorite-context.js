import { createContext, useState, useEffect } from "react";

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteMeetup) => {},
  removeFavorites: (meetupId) => {},
  itemIsFavorites: (meetupId) => {},
});

export function FavoriteContextProvider(props) {
  const [userFavorite, setUserFavorite] = useState(() => {
    const initialFavorites = JSON.parse(localStorage.getItem("favorites"));
    return initialFavorites || [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(userFavorite));
  }, [userFavorite]);

  function addFavorite(favoriteMeetup) {
    setUserFavorite((prevFavorite) => {
      return prevFavorite.concat(favoriteMeetup);
    });
  }

  function removeFavorite(meetupId) {
    setUserFavorite((prevFavorite) => {
      return prevFavorite.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavorite(meetupId) {
    return userFavorite.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorite,
    totalFavorites: userFavorite.length,
    addFavorites: addFavorite,
    removeFavorites: removeFavorite,
    itemIsFavorites: itemIsFavorite,
  };

  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContext;
