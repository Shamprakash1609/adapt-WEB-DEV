import React, { useRef, useState, useEffect } from 'react';
import video from '../videos/animatedtbot.mp4';
import '../intro.css';

const Intro = () => {
    const videoRef = useRef(null);
    const [isVideoEnded, setIsVideoEnded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false); // Track if the video is playing

    const handleVideoEnd = () => {
        setIsVideoEnded(true);
        setIsPlaying(false); // Update play state when video ends
    };

    const handlePlayVideo = () => {
        setIsVideoEnded(false);
        videoRef.current.play();
        setIsPlaying(true); // Update play state when video starts
    };

    const hasLink = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const playVideo = () => {
            if (videoRef.current && !isPlaying) { // Check if not already playing
                videoRef.current.play().catch(error => {
                    console.error("Error playing video:", error);
                });
                setIsPlaying(true); // Update play state
            }
        };

        const handleScroll = () => {
            const rect = document.getElementById("about").getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                playVideo();
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isPlaying]); // Depend on isPlaying to check the play state

    return (
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
            <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center relative">
                    <video
                        ref={videoRef}
                        className="rounded-t float-right"
                        src={video}
                        controls
                        loop={false}
                        onEnded={handleVideoEnd}
                    />
                    {isVideoEnded && (
                        <button
                            onClick={handlePlayVideo}
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl"
                        >
                            ▶️
                        </button>
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

                    <button
                        onClick={hasLink}
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
