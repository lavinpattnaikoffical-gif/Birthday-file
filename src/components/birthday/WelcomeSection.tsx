import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/birthday-hero.jpg';

interface WelcomeSectionProps {
  onStart: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative">
      {/* Background Hero Image */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="animate-float mb-8">
          <div className="relative mb-4">
            {/* Decorative elements around the heading */}
            <div className="absolute -top-4 -left-4 text-4xl animate-twinkle">✨</div>
            <div className="absolute -top-2 -right-6 text-3xl animate-heartbeat">🎊</div>
            <div className="absolute -bottom-2 -left-8 text-3xl animate-float">🎈</div>
            <div className="absolute -bottom-4 -right-4 text-4xl animate-twinkle">⭐</div>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-birthday bg-clip-text text-transparent glow-birthday relative z-10 animate-bounce-gentle">
              <span className="inline-block animate-pulse">🎉</span>
              <span className="mx-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-shift">
                Happy Birthday
              </span>
              <span className="inline-block animate-pulse">🎉</span>
            </h1>
            
            {/* Sparkle effects */}
            <div className="absolute top-1/2 left-1/4 text-2xl animate-twinkle opacity-70">✨</div>
            <div className="absolute top-1/3 right-1/3 text-xl animate-float opacity-60">💫</div>
            <div className="absolute bottom-1/3 left-1/3 text-xl animate-heartbeat opacity-80">🌟</div>
          </div>
          
          {/* Candles in a decorative box above the name */}
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 mb-6 shadow-lg border-2 border-pink-200 animate-float-slow">
            <div className="flex justify-center items-center gap-3">
              <div className="text-2xl animate-candle-flicker opacity-80">🕯️</div>
              <div className="text-3xl animate-candle-flicker opacity-90">🕯️</div>
              <div className="text-2xl animate-candle-flicker opacity-75">🕯️</div>
              <div className="text-3xl animate-candle-flicker opacity-85">🕯️</div>
              <div className="text-2xl animate-candle-flicker opacity-80">🕯️</div>
              <div className="text-3xl animate-candle-flicker opacity-90">🕯️</div>
              <div className="text-2xl animate-candle-flicker opacity-75">🕯️</div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 animate-name-glow">
            Lavin Pattnaik
          </h2>
        </div>
        
        <div className="animate-float-slow mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Today is all about celebrating YOU! ✨<br />
            Get ready for a special journey filled with memories, surprises, and fun! 💕
          </p>
        </div>
        
        <Button 
          variant="birthday" 
          size="lg" 
          onClick={onStart}
          className="text-2xl px-12 py-6 h-auto font-bold animate-heartbeat"
        >
          🎁 Click to Start 🎁
        </Button>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl animate-balloon opacity-70">🎈</div>
      <div className="absolute top-32 right-16 text-4xl animate-twinkle">⭐</div>
      <div className="absolute bottom-32 left-20 text-5xl animate-float">🌸</div>
      <div className="absolute bottom-20 right-12 text-4xl animate-heartbeat">💖</div>
      
      {/* Decorative Candles */}
      <div className="absolute top-40 left-8 text-3xl animate-candle-flicker opacity-80">🕯️</div>
      <div className="absolute top-48 left-16 text-2xl animate-candle-flicker opacity-75">🕯️</div>
      <div className="absolute top-36 right-12 text-3xl animate-candle-flicker opacity-80">🕯️</div>
      <div className="absolute top-44 right-20 text-2xl animate-candle-flicker opacity-75">🕯️</div>
      <div className="absolute bottom-40 left-12 text-2xl animate-candle-flicker opacity-70">🕯️</div>
      <div className="absolute bottom-48 right-8 text-3xl animate-candle-flicker opacity-80">🕯️</div>
      <div className="absolute bottom-36 right-24 text-2xl animate-candle-flicker opacity-75">🕯️</div>
    </div>
  );
};