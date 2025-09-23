import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import cakeImage from '@/assets/birthday-cake.jpg';
import fireworksImage from '@/assets/fireworks.jpg';

interface SurpriseSectionProps {
  onNext: () => void;
  showSurprise: boolean;
  setShowSurprise: (show: boolean) => void;
}

export const SurpriseSection: React.FC<SurpriseSectionProps> = ({ 
  onNext, 
  showSurprise, 
  setShowSurprise 
}) => {
  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {!showSurprise ? (
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-surprise bg-clip-text text-transparent mb-8">
              🎁 Special Surprise 🎁
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              I have something special waiting for you! 
            </p>
            
            <Button 
              variant="surprise" 
              size="lg" 
              onClick={() => setShowSurprise(true)}
              className="text-2xl px-12 py-6 h-auto font-bold"
            >
              Click for a Surprise 🎁
            </Button>
          </div>
        ) : (
          <div className="animate-scale-in">
            <div className="mb-8 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-twinkle">
                ✨ Make a Wish... ✨
              </h2>
            </div>
            
            {/* Birthday Cake */}
            <Card className="bg-gradient-cake p-8 shadow-card animate-cake-glow mb-8 relative overflow-hidden">
              <div 
                className="w-64 h-64 mx-auto rounded-full bg-cover bg-center shadow-soft mb-6"
                style={{ backgroundImage: `url(${cakeImage})` }}
              />
              
              {/* Floating candle flames */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-2xl animate-twinkle" style={{ animationDelay: `${i * 0.2}s` }}>
                      🕯️
                    </div>
                  ))}
                </div>
              </div>
            </Card>
            
            {/* Fireworks */}
            <div className="relative mb-8">
              <div 
                className="w-full h-32 bg-cover bg-center rounded-xl opacity-80 animate-firework"
                style={{ backgroundImage: `url(${fireworksImage})` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl animate-firework">🎆🎇✨🎆🎇</div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
              <p className="text-2xl text-primary mb-8 animate-heartbeat">
                Hope all your wishes come true! 🌟
              </p>
              
              <Button 
                variant="cake" 
                size="lg" 
                onClick={onNext}
                className="text-xl px-8 py-4 h-auto"
              >
                Continue the Fun 🎮
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};