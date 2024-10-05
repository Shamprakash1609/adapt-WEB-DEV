import React, { useRef, useState } from 'react';
import video from '../videos/animatedtbot.mp4';
import '../intro.css';

const Intro = () => {
    const videoRef = useRef(null);
    const [isVideoEnded, setIsVideoEnded] = useState(false); // To show play icon when video ends
    const [isVideoPlaying, setIsVideoPlaying] = useState(false); // To check if video is playing

    // Handle video end
    const handleVideoEnd = () => {
        setIsVideoEnded(true);
        setIsVideoPlaying(false);
    };

    // Handle video play
    const handlePlayVideo = () => {
        setIsVideoEnded(false);
        setIsVideoPlaying(true);
        videoRef.current.play();
    };

    // Handle contact section scroll
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
            <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center relative">
                    {/* Video Component */}
                    <video
                        ref={videoRef}
                        className="rounded-t float-right"
                        src={video}
                        muted={false}  // Mute video for autoplay on mobile
                        autoPlay={true}  // AutoPlay is allowed on most mobile browsers if muted
                        playsInline={true} // Prevents full-screen default on iOS devices
                        preload="auto"  // Preload the video for faster loading
                        loop={false}  // Play once, then show play button
                        onEnded={handleVideoEnd}  // Handle end of the video
                        onCanPlay={() => setIsVideoPlaying(true)}  // Ensure video starts when ready
                    />
                    {/* Play Icon Overlay */}
                    {isVideoEnded && (
                        <button
                            onClick={handlePlayVideo}
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl"
                        >
                            ▶️
                        </button>
                    )}
                    {!isVideoPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                            <span>Loading...</span>
                        </div>
                    )}
                </div>

                <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                    <h3 className="text-3xl text-blue-900 font-bold">About Us</h3>
                    <div>
                        <p className="my-3 text-xl text-gray-600 font-semibold text-justify">
                            At Adapt, we create smart, adaptable solutions for modern challenges. Our focus is on building the tBot, a telepresence robot designed to transform remote communication and collaboration.
                        </p>
                    </div>

                    <div>
                        <p className="my-3 text-xl text-gray-600 font-semibold text-justify">
                            With tbot, users can navigate spaces, interact in real time, and accomplish tasks from anywhere. At Adapt, innovation meets simplicity to bring you the future of remote connectivity.
                        </p>
                    </div>

                    {/* Contact Button */}
                    <button
                        onClick={scrollToContact}
                        className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group"
                    >
                        Contact us
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Intro;
