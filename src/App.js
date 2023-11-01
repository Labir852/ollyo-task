import * as React from 'react';
import './App.css';
// import { Box,ThemeProvider } from '@mui/system';
import img1 from './assets/images/image-1.webp'
import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#1A2027',
    height:'150px',
    width:'150px',
    boxShadow:'2px 2px 2px 2px grey',
    borderRadius:'5px',
  }));
  
  return (
    <div className="App">
      
     <Box className="__main__">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
          
            
            <Grid xs={2} md={4} sm={4}>
            <Item className='__item__'>
              <img src={img1}  style ={{height:'150px',width:'150px'}} alt="img1" />
            </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
        <Item className='__item__'>
              <img src={img1}  style ={{height:'150px',width:'150px'}} alt="img1" />
            </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
        <Item className='__item__'>
              <img src={img1}  style ={{height:'150px',width:'150px'}} alt="img1" />
            </Item>
        </Grid>


        <Grid xs={2} md={4} sm={4}>
            <Item className='__item__'>
              <img src={img1}  style ={{height:'150px',width:'150px'}} alt="img1" />
            </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
        <Item className='__item__'>
              <img src={img1}  style ={{height:'150px',width:'150px'}} alt="img1" />
            </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
        <Item className='__item__'>
              <img src={img1}  style ={{height:'150px',width:'150px'}} alt="img1" />
            </Item>
        </Grid>

        <Grid xs={2} md={4} sm={4}>
            <Item className='__item__'>
              <img src={img1}  style ={{height:'150px',width:'150px'}} alt="img1" />
            </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
        <Item className='__item__'>
              <img src={img1}  style ={{height:'150px',width:'150px'}} alt="img1" />
            </Item>
        </Grid>
        <Grid xs={2} sm={4} md={4}>
        <Item className='__item__'>
              <img src={img1}  style ={{height:'150px',width:'150px'}} alt="img1" />
            </Item>
        </Grid>
          </Grid>
        
      
    </Box>
    </div>
  );
}

export default App;
