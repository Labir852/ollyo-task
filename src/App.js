import * as React from 'react';
import './App.css';
// import { Box,ThemeProvider } from '@mui/system';
import img1 from './assets/images/image-1.webp'
import img2 from './assets/images/image-2.webp'
import img3 from './assets/images/image-3.webp'
import img4 from './assets/images/image-4.webp'
import img5 from './assets/images/image-5.webp'
import img6 from './assets/images/image-6.webp'
import img7 from './assets/images/image-7.webp'
import img8 from './assets/images/image-8.webp'
import img9 from './assets/images/image-9.webp'
import img10 from './assets/images/image-10.jpeg'
import img11 from './assets/images/image-11.jpeg'
import add from './assets/images/add-image.png'

import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import Gallery from './Gallery';
import { Button } from '@mui/material';
import Gallery from './Gallery';

function App() {


 
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    // height:'150px',
    // width:'150px',
    boxShadow:'2px 2px 2px 2px grey',
    borderRadius:'5px',
  }));

// const Featured = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#1A2027',
//   height:'320px',
//   width:'320px',
//   boxShadow:'2px 2px 2px 2px grey',
//   borderRadius:'5px',
// }));


  const pictures = [
    {
      id:1,
      pic:img1
    },
    {
      id:2,
      pic:img2
    },
    {
      id:3,
      pic:img3
    },
    {
      id:4,
      pic:img4
    },
    {
      id:5,
      pic:img5
    },
    {
      id:6,
      pic:img6
    },
    {
      id:7,
      pic:img7
    },
    {
      id:8,
      pic:img8
    },
    {
      id:9,
      pic:img9
    },
    {
      id:10,
      pic:img10
    },
    {
      id:11,
      pic:img11
    },
    {
      id:11,
      pic:img11
    },
    {
      id:11,
      pic:img11
    },
    {
      id:11,
      pic:img11
    },


  ]

  
  return (
    <div className="App">
       
     <Box className="__main__" 
     sx={{
      display: 'grid',
      gridAutoFlow: 'row',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(2, 80px)',
      gap: 2,
    }}
     >

<Item className='__item__ ' sx={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
             <img src={pictures[0].pic}  style ={{height:'100%',width:'100%'}} alt="img" />
           </Item>
           

         {Array.from(Array(pictures.length)).map((_,index)=>(
          
           <Item xs={2} md={4} sm={6}  className='__item__'>
             <img src={pictures[index].pic}  style ={{height:'100%',width:'100%'}} alt="img" />
           </Item>

         ))} 
            <Item xs={2} md={4} sm={6}  className='__item__' sx={{bgcolor:'white',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <img src={add}  style ={{height:'100%',width:'100%'}} alt="img1" />
              <h4>Add Images</h4>
            </Item>


    </Box>
    
    </div>
  );
}


// https://www.npmjs.com/package/react-grid-layout/v/1.4.1
export default App;
