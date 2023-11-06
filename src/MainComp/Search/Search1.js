import { createMuiTheme, Tab, TextField,ThemeProvider } from '@material-ui/core'
import Tabs from '@material-ui/core/Tabs';
import { Button } from '@material-ui/core';
import React ,{useEffect,useState} from 'react';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';
import SingleContent from '../Treading/SingleContent';
import { CustomPagination } from '../../Pagination/CustomPagination';

const Search1=()=>{

    const [type, settype] = useState(0);
    const [page, setPage] = useState(1);
    const [SearchText, setSearchText] = useState("");
    const [content, setcontent] = useState([]);
    const [noPages, setnoPages] = useState([]);


    const Dtheme=createMuiTheme(
        {
            palette:
            {
                type:'dark',
                main:'#fff'
            }
        }
    )


    const fetchContent=async()=>
    {
const {data}= await axios.get(`
https://api.themoviedb.org/3/search/${type ? "movie" : "tv"}?api_key=eb174133a332dcdc4dbaf12f0723b142&language=en-US&query=${SearchText}&page=${page}&include_adult=false`)


setcontent(data.results);
setnoPages(data.total_pages);

console.log(` the serach data `);
console.log(data)

    };

    useEffect(() => {
        window.scroll(0,0);
        fetchContent();
    }, [page,SearchText,noPages,type])


    return (
        <div>
            <ThemeProvider theme={Dtheme}>
            <div style={{display:'flex'}}>
            <TextField
             id="outlined-Success"
            style={{flex:1}}
            className="serchB"
            color="Success"
            label="search"
            variant="outlined"
            onChange={(e)=>setSearchText(e.target.value)}
            
            />
            <Button variant="contained" size="small" style={{marginLeft:12,marginTop:5}} ><SearchIcon/>Find</Button>

            </div>


<br></br>
             <Tabs 
             value={type}
             indicatorColor="secondary"
             textColor="secondary"
             centered

             onChange={(event,newValue)=>
            {
                settype(newValue);
                setPage(1)

            }}

      >
        <Tab style={{width:"50%"}} label="Movies" />
        <Tab  style={{width:"50%"}}  label="TV Series" />
      </Tabs>
            </ThemeProvider>

            <div>
            
            
            <div className="trending">
            {
            content&& content.map((c)=><SingleContent
            
            
            key={c.id} id={c.id} title={c.title||c.name} poster={c.poster_path} date={c.release_date||c.first_air_date}  media_type={c.media_type} vote1={c.vote_average}
            />)}

{SearchText &&content &&
          (type ? <h2>No Movies Found</h2> : <h2>No Series Found</h2>)}
            
            
            </div>
            <CustomPagination setPage={setPage} numberPages={noPages}/>
            
            </div>

            
        </div>
    )
}

export default Search1;
