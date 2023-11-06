import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position:'fixed',
    bottom:0,
    backgroundColor:' #372f34',
    zIndex:100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  let history = useHistory();

  useEffect(() => {
 
    if(value===0)
    {
        
        history.push("/");
    }else if(value===1)
    {
        history.push("/Series");
      
    }
    else if(value===2)
    {
        history.push("/Search");
        
    }
    else if(value===3)
    {
        history.push("/Movies");
        
    }

  }, [value,history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >

      <BottomNavigationAction
      style={{color:'white'}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction
      style={{color:'white'}} label="Tv series" icon={<LiveTvIcon />} />
      <BottomNavigationAction 
     style={{color:'white'}} label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction 
     style={{color:'white'}} label="Movies" icon={<MovieIcon />} />
    </BottomNavigation>
    
    
  );
}
