
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=u6JjDgTSosXJPkb5PfkCHVtADqRMSyQf&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
  
    const gifs = data.map( fot => ({
      id: fot.id,
      title: fot.title,
      url: fot.images.downsized_medium.url
    }));
  
    
    return gifs;
  
  }
  