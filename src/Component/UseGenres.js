// import React from 'react'
// import { Genres } from './Genres';

const UseGenres=(selectedGenres)=>{

    if(selectedGenres.length<1) return "";


    const GenresId=selectedGenres.map((g)=>g.id);

    return GenresId.reduce((acc,curr)=>acc + "," + curr);

}

export default UseGenres
