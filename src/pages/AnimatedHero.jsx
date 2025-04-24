import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AnimatedHero = () => {
    const headingText = "Hii, I'm Eddie Jabraouti"; 
    const [displayedText, setDisplayedText] = useState(''); 
    const [showCursor, setShowCursor] = useState(true); 
    const [fadeInDesc, setFadeInDescription] = useState(false); 
    const [fadeInButtons, setFadeInButtons] = useState(false); 

    useEffect(() => { 
        let i = 0; 
        const typingTimer = setInterval(() => { 
            if (i < headingText.length) { 
                setDisplayedText(prev => prev + headingText.charAt(i)); 
                i++; 
            } else { 
                clearInterval(typingTimer); 
                setFadeInDescription(true); 

                setTimeout(() => { 
                    setFadeInButtons(true); 

                    setTimeout(() => {
                        setShowCursor(false);
                    }, 500);
                }, 500);
            }
        }, 100);
                
        return () => clearInterval(typingTimer);
    }, []);

    return (
        <section className="min-h-screen bg-black text-white px-6 flex flex-col justify-center items-center">
          <div className="max-w-4xl text-center">
            <img
              src="your-image.jpg"
              alt="Eddie Jabraouti"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto mb-6 border-4 border-gray-800 shadow-lg object-cover"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {displayedText}
              {showCursor && <span className="animate-blink">|</span>}
            </h1>
            <p className={`text-lg text-gray-400 mb-6 max-w-xl mx-auto transition-opacity duration-1000 ${fadeInDesc ? 'opacity-100' : 'opacity-0'}`}>
              Honours Computer Science student at the University of Guelph · Passionate about building ML-powered solutions and impactful data-driven tools.
            </p>
            <div className={`flex flex-wrap justify-center gap-4 transition-opacity duration-1000 ${fadeInButtons ? 'opacity-100' : 'opacity-0'}`}>
              <Link to="/contact"><button className="border-2 border-black rounded bg-white hover:bg-gray-400 text-black px-6 py-2 rounded-md text-lg transition">
                Get In Touch
              </button>
              </Link>
              <Link to="/Projects"><button className="bg-black-800 border border-white rounded hover:bg-gray-700 text-white px-6 py-2 rounded-md text-lg transition">
                View Projects
              </button>
              </Link>
            </div>
          </div>
        </section>
      );
    };
    
    export default AnimatedHero;