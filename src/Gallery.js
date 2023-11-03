import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import styled from 'styled-components';

const Gallery = () => {
    const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 }
      ];

      const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#1A2027',
        // height:'150px',
        // width:'150px',
        boxShadow:'2px 2px 2px 2px grey',
        borderRadius:'5px',
      }));
  return (
    <div>
        <Box
        
      >
        <Item sx={{ gridColumn: '1', gridRow: '1 / 3' }}>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>4</Item>
        <Item>4</Item>
      </Box>
    </div>
  )
}

export default Gallery