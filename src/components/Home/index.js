import React from 'react';

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="object-cover fixed w-full h-full"
      >
        <source src="/images/video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative h-screen flex items-center justify-center bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg mx-auto w-full text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Hi, I am Sourabh Gautam
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              UI/UX Developer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://drive.google.com/file/d/1cdWQVSsbI7Yr2eF-LVSW272VylF-tCXG/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300">
                  Download Resume
                </button>
              </a>
              <a href="https://www.linkedin.com/in/sourabhgautam/" target="_blank">
                <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;