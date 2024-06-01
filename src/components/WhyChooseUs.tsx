"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const musicSchoolContent = [
    {
      title: 'Discover Your Sound with us: A Personal Journey in music Mastery',
      description: 'Embark on a musical journey that uniquely Yours.Our Personalized instruction adapts to your individual NextNodeServer, setting the stage for unparalleled growth and creativity. At our music Schoolbell, your aspirations meet our dedicated support, creating a harmonious path to mastery.' 
    },
    {
        title: 'Live Feedback & Engagement',
        description: 'Immerse yourself in an interactive learning experience where feedback is immediate just Like real-time changes in a collaborative project. The approach enhances your understanding and mastery of music concept and performance techniques.'
    },
    {
        title: 'Cutting-Edge Curriculum',
        description:'Our Curriculum is continuously updated to include the latest music education trends and technologies ensuring you are always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that envolves with the industry.'
    },
    {
        title: 'Live Feedback & Engagement',
        description: 'Immerse yourself in an interactive learning experience where feedback is immediate just Like real-time changes in a collaborative project. The approach enhances your understanding and mastery of music concept and performance techniques.'
    },
    {
        title: 'Cutting-Edge Curriculum',
        description:'Our Curriculum is continuously updated to include the latest music education trends and technologies ensuring you are always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that envolves with the industry.'
    },
    {
        title: 'Limitless Learning Opportunities',
        description: 'With our expansive resource library and dynamic course offerings, you will never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.'
    },
]; 

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs
