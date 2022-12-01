export const getGifs = async (category, count) => {
  const api_key = "";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${count}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized.url,
  }));
  return gifs;
};
