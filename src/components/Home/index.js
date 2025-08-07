import React from "react";
import { Github, Download } from "lucide-react";
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div className="fixed inset-0 bg-cover bg-center" >
      <div className="relative h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 z-0">
          <Spline 
           scene="https://prod.spline.design/w-aiDZWhODXvQIbT/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-lg mx-auto w-full text-center mt-16 md:mt-32">
            <h1 className="text-4xl font-bold text-white mb-4">
              Hi, I am Sourabh Gautam
            </h1>
            <p className="text-xl text-gray-200 mb-8">Full Stack Developer</p>
            <div className="grid grid-cols-1 sm:flex gap-4 justify-center">
              <a
                href="https://drive.google.com/file/d/1BIRSYK618vZNJ-Hc_9rMCAvLQ3jaYv4u/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <button className="flex items-center justify-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 w-full sm:w-auto">
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </a>
              <a
                href="https://github.com/sourabhgautam98?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
              >
                <button className="flex items-center justify-center gap-2 bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 w-full sm:w-auto">
                  <Github className="w-5 h-5" />
                  GitHub
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