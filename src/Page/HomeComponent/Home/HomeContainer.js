import React from 'react';
import About from '../../About/About';
import Background from '../../Background/Background';
import Blog from '../Blog/Blog';
import ShowReview from '../Review/ShowReview';
import ItemsForHomePage from './ItemsForHomePage';

const HomeContainer = () => {
    //  const bgUrl2='https://i.ibb.co/RNDdLKf/bg2.jpg'
    //  const bg={
      
    //     background:`url(${bgUrl2})`,

    //     backgroundBlendMode: 'darken,luminosity',
       
    
        
    // }
    return (
        <div  >
            <Background></Background>
           <ItemsForHomePage></ItemsForHomePage> 
           <Blog></Blog>
           <About></About>
           <ShowReview></ShowReview>
        </div>
    );
};

export default HomeContainer;