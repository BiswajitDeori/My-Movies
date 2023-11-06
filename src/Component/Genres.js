import { Chip} from '@material-ui/core';
import axios from 'axios'
import React,{useState,useEffect} from 'react'


export const Genres = ({
    type,
    selectedGenres,
     genres, 
     setGenres, 
     setSelectedGenres, 
     setPage,



}) => {


    const handleRemove = (genre) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
        setPage(1);
      };

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
        setPage(1);
      };

    const fetchGenres=async()=>
    {
      const {data}=  await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=eb174133a332dcdc4dbaf12f0723b142&language=en-US`)


setGenres(data.genres);
    };

    console.log(genres);

    useEffect(() => {
        fetchGenres();


        return ()=>
        {
            setGenres({});
        }
    }, []);

    return (
        <div style={{padding:"6px 0"}} >

            {selectedGenres.map((genre) => (<Chip style={{ margin: 2 }} label={genre.name} key={genre.id} color="primary" clickable size="small" onDelete={() => handleRemove(genre)} />
                  ))}
       
      {genres.map((genre)=>(
          <Chip key={genre.id}  label={genre.name} clickable style={{ margin: 3 }}  size="small"  onClick={() => handleAdd(genre)}/>
      )
      )}

        </div>
    )
}
