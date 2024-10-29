import axios from "axios";

const instant = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        'api_key':'f89a6c1f22aca3858a4ae7aef10de967'
    }
});

export async function mainApi(){
  let [popular,movieTop,tvTop] = await Promise.all([
                instant.get('/movie/popular'),
                instant.get('/movie/top_rated'),
                instant.get('/tv/top_rated')
            ]);

        popular = popular.data.results;
        movieTop = movieTop.data.results;
        tvTop = tvTop.data.results;

  return {popular,movieTop,tvTop};    
}


export async function detail(id,type){
    let res = await instant.get(`/${type}/${id}`,{
        params:{append_to_response:'videos,images,casts'}
    });
    return res.data;
}



