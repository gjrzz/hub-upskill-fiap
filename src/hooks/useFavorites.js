import { useState, useEffect } from "react";

export default function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favoriteCourses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteCourses", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(course) {
    const exists = favorites.find((c) => c.id === course.id);

    if (exists) {
      setFavorites(favorites.filter((c) => c.id !== course.id));
    } else {
      setFavorites([...favorites, course]);
    }
  }

  function isFavorite(id) {
    return favorites.some((c) => String(c.id) === String(id));
  }

  return { favorites, toggleFavorite, isFavorite };
}
