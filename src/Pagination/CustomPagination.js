
import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { createMuiTheme,ThemeProvider } from '@material-ui/core';


const Dtheme=createMuiTheme({

    palette:
    {
        type:"dark",
    },
})



export const  CustomPagination= ({setPage,numberPages=10}) => {
 const handlePageChange=(page)=>
 {
     setPage(page);
     console.log(`the page no is ${page}`)
     window.scroll(0,0);
 }

    return (
        <div
        
        style={{
            width:"100%",
            display:"flex",
            justifyContent:'center',
            marginTop:14,
        }}
        >
       <ThemeProvider theme={Dtheme}>
          <Pagination
            onChange={(e) => handlePageChange(e.target.textContent)}
            count={numberPages}
            color="primary"
          />
       </ThemeProvider>
      </div>
    )
}

