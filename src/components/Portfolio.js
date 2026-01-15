import React, { useState, useEffect } from "react";
import adaptct from '../images/adaptct.png';
import tbot from '../images/s1.png';
import AOS from 'aos'; // Importing AOS
import 'aos/dist/aos.css'; // Importing AOS styles

const Product = () => {
  const [mainImage, setMainImage] = useState(adaptct);
  const thumbnails = [adaptct, tbot, adaptct, tbot, adaptct];

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="flex flex-col gap-12 p-6 md:flex-row md:p-12 bg-gray-100 dark:text-black" id="products">
      {/* Two Column Layout */}
      <div className="w-full md:w-1/2">
        {/* Adapt Content (Text Section) */}
        <div data-aos="zoom-in"> {/* Changed AOS animation to zoom-in */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Adapt Products</h1>
            <p className="my-3 text-xl text-gray-600 font-semibold text-justify">
              tBot is designed to assist and guide users in everyday environments, providing real-time navigation and support. Empowered with benchmarked AI, tBot ensures smooth and efficient operations whether it's used in corporate settings, educational institutions, or public spaces. tBot effortlessly aims to automate routine tasks, enhance user experience, and improve overall efficiency through smart navigation and guidance solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        {/* Thumbnails and Main Image */}
        <div className="flex flex-col gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex h-fit justify-between md:h-96 md:flex-col">
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Product Thumbnail ${index + 1}`} // This is fine as it's descriptive
                className="h-16 w-16 cursor-pointer rounded-lg object-cover hover:shadow-lg transition-shadow duration-200"
                onClick={() => setMainImage(thumbnail)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div data-aos="zoom-out"> {/* Changed AOS animation to zoom-out */}
            <div className="flex justify-center items-center">
              <img
                src={mainImage}
                alt="tBot product" // Simplified for accessibility
                className="w-full rounded-lg object-cover md:w-[36rem] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
