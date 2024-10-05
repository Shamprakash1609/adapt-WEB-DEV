import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/tbot.jpg';
import '../Hero.css';

const Hero = () => {
    // Function to handle button click
    const hasLink = () => {
        // Implement your logic here, for example, scroll to the about section
        const aboutSection = document.getElementById('about'); // Ensure you have an element with this ID
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="hero" id='hero'>
                <NavBar />
                
                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-blue-900">
                                Welcome to Adapt - Revolutionizing the Future with tBot
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                                At Adapt, we deliver the future with tBot—a fast, reliable solution to optimize your business operations with precision.
                            </div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                {/* Change Link to button and use hasLink function */}
                                <button 
                                    onClick={hasLink} 
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="tBot in action" className="rounded-lg float-right duration-1000 h-86 hero-img" src={heroImg} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Example About Section */}
            <div id="about" className="about-section p-8">
                
            </div>
        </>
    );
}

export default Hero;
