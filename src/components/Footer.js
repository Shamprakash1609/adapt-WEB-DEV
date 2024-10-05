import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">
                        {/* 1st block */}
                        <div className="col-span-12 lg:col-span-4">
                            <div className="box-border border-b-4 border-blue-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                                <h3 className="font-extrabold text-4xl text-blue-900">Adapt</h3>
                                <div className='text-md font-medium text-gray-600'>
                                    {/* <h5>Adapt</h5> */}
                                   <p>We don't give up. We Adapt.</p>
                                </div>
                            </div>
                        </div>
                        {/* 2nd block */}
                        <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                            <h6 className="text-[#013289] text-xl font-bold mb-4">LINKS</h6>
                            <ul className="text-md">
                                <li className="mb-2">
                                    <HashLink to="#hero" className="text-[#013289] hover:text-gray-900  transition duration-250 ease-in-out">Home</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#about" className="text-[#013289] hover:text-gray-900  transition duration-250 ease-in-out">About</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#services" className="text-[#013289] hover:text-gray-900  transition duration-250 ease-in-out">Services</HashLink>
                                </li>
                                <li className="mb-2">
                                    <HashLink to="#Ourteam" className="text-[#013289] hover:text-gray-900  transition duration-250 ease-in-out">Our Team</HashLink>
                                </li>                            
                                <li className="mb-2">
                                    <HashLink to="#contact" className="text-[#013289] hover:text-gray-900 transition duration-250 ease-in-out">Contact</HashLink>
                                </li>                            
                            </ul>
                        </div>
                   {/* 3rd block: Services */}
<div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
    <h6 className="text-blue-900 text-xl font-bold mb-4">Our Services</h6>
    <ul className="space-y-2 text-md">
        {[
            "Telepresence Solutions",
            "Custom Robotics Development",
            "AI-Powered Automation",
            "Technical Support & Maintenance"
        ].map((service) => (
            <li key={service}>
                <HashLink
                    to="#services"
                    className="text-blue-900 hover:text-gray-900 transition duration-250 ease-in-out"
                >
                    {service}
                </HashLink>
            </li>
        ))}
    </ul>
</div>

                        {/* 4th block */}
                        <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-900">
                            <div className="text-xl mb-6">
                                Social Media Links
                            </div>
                            <div className="text-md font-medium mb-6">
                                Follow us on social media.
                            </div>
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                        <a href="https://www.linkedin.com/company/sanctuaryadapt/" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'>
                                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                            </svg>
                        </a>
                        <a href="https://youtube.com/@adaptofficial?si=ghoyLWsZqFgcF1Vo" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 576 512" className="fill-current font-black hover:animate-pulse">
                                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/adaptsofficial?igsh=bHE2ODU2cHpwNGpp" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50" className="fill-current font-black hover:animate-pulse">
                                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                            </svg>
                        </a>
                    </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
