import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface PhotoGalleryProps {
  onNext: () => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ onNext }) => {
  const photoPlaceholders = [
    { caption: "Best Smile 😊", placeholder: "Add your favorite photo here" },
    { caption: "Funny Moment 😂", placeholder: "That hilarious memory" },
    { caption: "Unforgettable Day 🌟", placeholder: "A special day together" },
    { caption: "Sweet Memory 💕", placeholder: "A heartwarming moment" },
    { caption: "Adventure Time 🚀", placeholder: "An exciting experience" },
    { caption: "Just Because 🌸", placeholder: "Any beautiful moment" },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-birthday bg-clip-text text-transparent mb-6">
            📸 Photo Memories 📸
          </h2>
          <p className="text-xl text-muted-foreground">
            Here are some of our beautiful moments together! 💫
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {photoPlaceholders.map((photo, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm shadow-card hover:shadow-soft transition-smooth hover:scale-105 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-square bg-gradient-soft border-4 border-primary/20 rounded-lg m-4 flex items-center justify-center relative">
                <div className="text-center p-6">
                  <div className="text-6xl mb-4 animate-twinkle">📷</div>
                  <p className="text-sm text-muted-foreground">{photo.placeholder}</p>
                </div>
                
                {/* Decorative frame elements */}
                <div className="absolute top-2 left-2 text-primary animate-float">🌸</div>
                <div className="absolute top-2 right-2 text-accent animate-twinkle">✨</div>
                <div className="absolute bottom-2 left-2 text-secondary animate-heartbeat">💖</div>
                <div className="absolute bottom-2 right-2 text-warm animate-float-slow">⭐</div>
              </div>
              
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg text-primary">{photo.caption}</h3>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="birthday" 
            size="lg" 
            onClick={onNext}
            className="text-xl px-8 py-4 h-auto"
          >
            Continue to Messages 💌
          </Button>
        </div>
      </div>
    </div>
  );
};