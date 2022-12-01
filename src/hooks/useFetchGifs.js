import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const result = await getGifs(category, 10);
    setGifs(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return { images: gifs, isLoading };
};
