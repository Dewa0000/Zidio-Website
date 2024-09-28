import React from 'react'

import Hero from '../Components/Hero/Hero'
import CoursesCards from '../Components/CoursesCards/CoursesCards';
import WhyZidio from '../Components/WhyZidio/WhyZidio';
import Testimonials from '../Components/Testimonials/Testimonials';

const HomePage = () => {
    return (
        <div>

            <Hero />
            <CoursesCards />
            <WhyZidio />
            <Testimonials />
        </div>
    )
}

export default HomePage
