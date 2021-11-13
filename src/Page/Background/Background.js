import { Typography } from '@mui/material';
import React from 'react';

const Background = () => {
    const bgUrl='https://i.ibb.co/x7Dtfzb/bg.jpg'
    // const bgUrl2='https://i.ibb.co/RNDdLKf/bg2.jpg'
    const bg={
        background:`url(${bgUrl})`,
        // background:`url(${bgUrl2})`,

        backgroundColor:'rgba(138, 107, 80,0.6)',
        backgroundBlendMode: 'darken,luminosity',
       
    
        
    }
    return (
        <div style={bg}>
             <Typography style={{color:'#EADDD0',padding:'5%'}} variant="h2" gutterBottom component="div">
       WelCome To Wood Art
      </Typography>
      <Typography style={{width:'50%',margin:'auto',color:'wheat',padding:'2%'}} variant="body1" gutterBottom>Woodwork has a significant impact on children's self-esteem and confidence and it develops a sense of agency – that “can-do” mindset. Woodwork is a medium for children to express their creativity and imagination. It is important not to set projects whereby all the children create the same object.</Typography>
        </div>
    );
};

export default Background;