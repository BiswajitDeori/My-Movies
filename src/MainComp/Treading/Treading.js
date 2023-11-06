import React,{useState,useEffect} from 'react'
import axios from 'axios'
import SingleContent from './SingleContent';
import './Treading.css'
import { CustomPagination } from '../../Pagination/CustomPagination';
const Treading =()=>
{
    const api="eb174133a332dcdc4dbaf12f0723b142"
    const [page, setPage] = useState(1);

 const [content, setcontent] = useState([]);

    const fetchTreading=async()=>
    {

        const {data}=await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api}`)

     //https://api.themoviedb.org/3/movie/550?api_key=eb174133a332dcdc4dbaf12f0723b142
        //https://api.themoviedb.org/3/trending/all/day?api_key=eb174133a332dcdc4dbaf12f0723b142
        setcontent(data.results);
    };


    useEffect(() => {
      
        fetchTreading();
    }, [page])

    return(

        <div>
            
<span className="pageTitle"> Trending
</span>

<div className="trending">
{
content&& content.map((c)=><SingleContent


key={c.id} id={c.id} title={c.title||c.name} poster={c.poster_path} date={c.release_date||c.first_air_date}  media_type={c.media_type} vote1={c.vote_average}
/>)}


</div>
<CustomPagination setPage={setPage}/>

</div>

  

    );


}


export default Treading
