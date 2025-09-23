import React from 'react';

export const FloatingAnimations = () => {
  return (
    <>
      {/* Floating Balloons */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={`balloon-${i}`}
            className={`absolute text-4xl animate-balloon opacity-60`}
            style={{
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`
            }}
          >
            {i % 3 === 0 ? '🎈' : i % 3 === 1 ? '🎀' : '🌟'}
          </div>
        ))}
      </div>
      
      {/* Twinkling Stars */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={`star-${i}`}
            className={`absolute text-2xl animate-twinkle`}
            style={{
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 11) % 90}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
      
      {/* Floating Hearts */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className={`absolute text-3xl animate-float opacity-40`}
            style={{
              top: `${20 + (i * 9) % 60}%`,
              left: `${15 + (i * 13) % 70}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          >
            💖
          </div>
        ))}
      </div>
      
      {/* Confetti Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`confetti-${i}`}
            className={`absolute text-lg animate-confetti`}
            style={{
              left: `${i * 6.5}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`
            }}
          >
            {i % 4 === 0 ? '🎊' : i % 4 === 1 ? '🌸' : i % 4 === 2 ? '💫' : '🎉'}
          </div>
        ))}
      </div>
    </>
  );
};