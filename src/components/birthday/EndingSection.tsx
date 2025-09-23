import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface EndingSectionProps {
  onReplay: () => void;
}

export const EndingSection: React.FC<EndingSectionProps> = ({ onReplay }) => {
  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="text-8xl mb-6 animate-heartbeat">💕</div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-birthday bg-clip-text text-transparent mb-6">
              Thank you for being YOU
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8 animate-twinkle">
              Happy Birthday once again! 🎉
            </h3>
          </div>
          
          <Card className="bg-gradient-soft p-8 shadow-card mb-12 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              I hope this little birthday website brought a smile to your face! 😊<br />
              You're amazing, and I'm so grateful to have you in my life. 🌟<br />
              Here's to another year of wonderful memories together! 🥳
            </p>
          </Card>
          
          <Button 
            variant="birthday" 
            size="lg" 
            onClick={onReplay}
            className="text-xl px-12 py-6 h-auto font-bold animate-heartbeat"
          >
            🎉 See it Again 🎉
          </Button>
        </div>
      </div>
      
      {/* Extra floating hearts for the ending */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`ending-heart-${i}`}
            className="absolute text-3xl animate-float opacity-60"
            style={{
              top: `${10 + (i * 4) % 80}%`,
              left: `${5 + (i * 7) % 90}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + i * 0.1}s`
            }}
          >
            {i % 4 === 0 ? '💖' : i % 4 === 1 ? '⭐' : i % 4 === 2 ? '🌸' : '✨'}
          </div>
        ))}
      </div>
    </div>
  );
};