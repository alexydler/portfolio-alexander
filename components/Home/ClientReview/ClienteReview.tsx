"use client";
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClienteReviewCard from './ClienteReviewCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ClienteReview = () => {
  return (
    <div id="testimonials" className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Gente agradecida por la chamba realizada <br/> 
            <span className='text-cyan-300'> Chambero </span>
        </h1>
        <div className='mt-6 w-[70%] mx-auto'>
            <Carousel
                
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                >
                <ClienteReviewCard
                image="/images/c1.png"
                name="Alex Ydler"
                role= "CEO, Developer"
                />
                <ClienteReviewCard
                image="/images/c2.png"
                name="Alex Ydler"
                role= "CEO, Developer"
                />
                <ClienteReviewCard
                image="/images/c3.png"
                name="Alex Ydler"
                role= "CEO, Developer"
                />
                <ClienteReviewCard
                image="/images/c4.png"
                name="Alex Ydler"
                role= "CEO, Developer"
                />
                <ClienteReviewCard
                image="/images/c5.png"
                name="Alex Ydler"
                role= "CEO, Developer"
                />
                </Carousel>;

        </div>

    </div>
  )
}

export default ClienteReview