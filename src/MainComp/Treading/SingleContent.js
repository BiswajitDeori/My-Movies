import { Badge } from '@material-ui/core';
import {img_300,unavailable} from '../../Config/Config'
import './SingleContent.css'
import ContentModel from '../../Modal/ContentModel';

const SingleContent=({id,title,poster,date,media_type,vote1})=>
{
return(
    <ContentModel media_type={media_type} id={id}>
    <Badge badgeContent={vote1} color={vote1>6?'primary':'secondary'} />
    <img className="poster" src={poster?`${img_300}/${poster}`:unavailable} alt='image poster'/>
    <b className="title">{title}</b>
    <span className="subTitle">
        {media_type==='tv'?"TV Serie":"Movie"}
        <spane className="subTitle" style={{fontWeight:800}}>{date}</spane>
    </span>
    

    
    </ContentModel>
    );

}

export default SingleContent;