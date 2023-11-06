import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import StarIcon from '@material-ui/icons/Star';
import {img_500,unavailable,unavailableLandscape} from '../Config/Config';

import './ContentModel.css'


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
   
   
    height:"80%",
    width:"90%",
    backgroundColor:"#39445a",
    border:"1px solid #282c34",
    borderRadius:12,
    color:"white",
    boxShadow:theme.shadows[5],
    padding: theme.spacing(1,1,3)

  },
})); 

export default function ContentModel({children,media_type,id}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  const [content, setcontent] = useState();
  const [video, setVideo] = useState();


  const fetchData=async()=>
  {
     
    const {data}= await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=eb174133a332dcdc4dbaf12f0723b142&language=en-US`)
     console.log(data);
    setcontent(data);
  }


  const fetchVideo=async()=>
  {
      const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=eb174133a332dcdc4dbaf12f0723b142&language=en-US`)

    //   console.log(data.results[0])
      setVideo(data.results[0]?.key);
 
    }

    useEffect(() => {
        fetchData();
        fetchVideo();
    }, [])

  return (
    <div>
      <div type="button" className="media" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 800,
        }}
      >
        <Fade in={open}>
        {content && <div className={classes.paper}>
            <div className="ContentModel">

            <img alt={content.name||content.title} className="Content_p" src={content.poster_path?`${img_500}/${content.poster_path}`:unavailable}/>
          
   
        <img  className="Content_l" src={content.backdrop_path ?`${img_500}/${content.backdrop_path}`:unavailableLandscape} alt={content.name||content.title}/>
        
        <div className="ContentModel_about">
            <span className="ContentModel_title">
                {content.name ||content.title }  ( 
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                

            </span>
            {content.tagline && (
                    <i className="tagline">{content.tagline}</i>  
                  )}

                <span>
                   {content.vote_average && (<i className="tagline1">IMDb RATING :  <StarIcon style={{fontSize:"25px",color:"yellow"}}/> {content.vote_average}</i>) }
                </span>

                    <span className="ContentModal__description">
                    {content.overview}
                  </span>
               
               

                  

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Play the Trailer
                  </Button>

                  
        </div>
            </div>
        
        </div>}
        </Fade>
      </Modal>
    </div>
  );
}
