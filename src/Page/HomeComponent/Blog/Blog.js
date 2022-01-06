import { Container, Grid } from '@mui/material'
import React from 'react'
import './Blog.css'

export default function Blog() {
    return (
        <div className='news-article' style={{ backgroundColor: "#251C14" }}>
        <Container>
          <div className='news-article-titles'>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div className="ourworks-title ba">
                  <h2>Our Blogs</h2>
                  <h1 className="text-size fw-bold">BLOGS & ARTICLE</h1>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div className='title-btn'>
                  {/* <button disabled>All Blogs</button> */}
                </div>
              </Grid>
            </Grid>
          </div>
  
          <Grid container spacing={2}>
          
            <Grid item xs={12} md={5}>
              <div className='left-article-box a'>
                <div className='left-article-box-img a image-box'>
                  <img className='gallery' src="https://i.ibb.co/3cZ0Gfh/photo-1612423284934-2850a4ea6b0f-ixlib-rb-1-2.jpg" alt="" />
                </div>
                <div className='left-article-box-text a pt-2'>
                  <h1>10 Tips On How To Dress Up For Any Events</h1> <br />
                  <small>Dec 12, 2021</small>
                  <p>Dressing for these events can be a little tricky, especially once you put away all of your summer options but it hasn’t completely cooled off yet. Whether you’re going somewhere...</p>
                  <button disabled>read more</button>
                </div>
  
              </div>
              <div className='left-article-box'>
                <div className='left-article-box-img a image-box'>
                  <img className='gallery' src="https://i.ibb.co/x7Dtfzb/bg.jpg" alt="" />
                </div>
                <div className='left-article-box-text a'>
                  <h1>Follow The Safety Guideline While Shopping</h1> <br />
                  <small>Oct 12, 2021</small>
                  <p>The unprecedented threat from the novel coronavirus pandemic caused by the SARS-CoV-2 virus has compelled most countries to lockdown their cities or hotspots...</p>
                  <button disabled>read more</button>
                </div>
  
              </div>
            </Grid>
            <Grid item xs={12} md={7}>
              <div className='left-article-box b'>
                <div className='left-article-box-img image-box'>
                  <img className='gallery' src="https://i.ibb.co/HdLTTRQ/wooden-art-pieces-painting-process-23-2148271008.jpg" alt="" />
                </div>
                <div className='left-article-box-text'>
                  <h1>Explore The New Fashion Trends of 2022.</h1> <br />
                  <small>Jan 01, 2022</small>
                  <p>It's an interesting moment in fashion: We collectively exist somewhere between at-home loungewear and full-on party mode. That intersection calls for both high-shine and raver looks, as well as comfort-minded oversized silhouettes and athleisure finding its way into evening. Next year will be about bold bright bags that indicate a dose of optimism and little skirts and micro jackets that signal we are officially out of hiding. Designers are all about having a good time in 2022 if you are. Chanel is leading the look. Jackets are becoming about the size of our collective patience for this endless pandemic. Lean into a leaner, more tailored silhouette, as at Proenza Schouler, Miu Miu, and Jacquemus. Paired with everything from slim pants to miniskirts, the micro blazer opens up a whole host of new styling opportunities.</p>
                  <button disabled>read more</button>
                </div>
  
              </div>
            </Grid>
  
          </Grid>
        </Container>
      </div>
    )
}
