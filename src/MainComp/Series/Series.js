import React,{useState,useEffect} from 'react'
import { CustomPagination } from '../../Pagination/CustomPagination'
import SingleContent from '../Treading/SingleContent'
import { Genres } from '../../Component/Genres'
import UseGenres from '../../Component/UseGenres'
import axios from 'axios'
export default function Series() {



    // const api="eb174133a332dcdc4dbaf12f0723b142"
    const [page, setPage] = useState(1);
    const [content, setcontent] = useState([]);
    const [no_pages, setno_pages] = useState(100);
   const [selectedGenres, setSelectedGenres] = useState([])
const [genres, setGenres] = useState([])

let genresURL=UseGenres(selectedGenres)
    useEffect(() => {
      
        fetchMovies();
    }, [page,no_pages,genresURL])

    const fetchMovies=async()=>
    {
       
        
        const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=eb174133a332dcdc4dbaf12f0723b142&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresURL}`)
        setcontent(data.results);
     

        console.log(`the url ${genresURL}`)

        // console.log(data.results);
        // console.log(data);
        setno_pages(data.total_pages);
        setcontent(data.results);
        
        console.log(no_pages)

    

    }



    return (
       
        <div>
            
        <span className="pageTitle"> Tv Series
        </span>

             
      <Genres
        type="tv"
         selectedGenres={selectedGenres}
          genres={genres} 
          setGenres={setGenres} 
          setSelectedGenres={setSelectedGenres} 
          setPage={setPage}/>
       

    
        
        <div className="trending">
        {
        content&& content.map((c)=><SingleContent
        
        
        key={c.id} id={c.id} title={c.title||c.name} poster={c.poster_path} date={c.release_date||c.first_air_date}  media_type="tv" vote1={c.vote_average}
        />)}
        
        
        </div>
        {<CustomPagination setPage={setPage} numberPages={no_pages} />}
         
        
        </div>
    )
}
