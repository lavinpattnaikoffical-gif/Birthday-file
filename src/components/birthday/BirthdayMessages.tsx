import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BirthdayMessagesProps {
  onNext: () => void;
}

export const BirthdayMessages: React.FC<BirthdayMessagesProps> = ({ onNext }) => {
  const messages = [
    {
      text: "You make every day brighter 🌟",
      emoji: "🌟",
      gradient: "bg-gradient-birthday"
    },
    {
      text: "I hope today is as amazing as you are 🎂",
      emoji: "🎂",
      gradient: "bg-gradient-surprise"
    },
    {
      text: "You deserve all the smiles in the world 😊",
      emoji: "😊",
      gradient: "bg-gradient-cake"
    },
    {
      text: "Another year, another adventure 🚀",
      emoji: "🚀",
      gradient: "bg-gradient-soft"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-birthday bg-clip-text text-transparent mb-6">
            💌 Birthday Wishes 💌
          </h2>
          <p className="text-xl text-muted-foreground">
            Special messages just for you! 💕
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {messages.map((message, index) => (
            <Card 
              key={index}
              className={`${message.gradient} p-8 shadow-card hover:shadow-soft transition-bounce hover:scale-105 animate-fade-in backdrop-blur-sm`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="text-center">
                <div className={`text-6xl mb-6 animate-${index % 2 === 0 ? 'twinkle' : 'heartbeat'}`}>
                  {message.emoji}
                </div>
                <p className="text-xl font-medium text-foreground leading-relaxed">
                  {message.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="surprise" 
            size="lg" 
            onClick={onNext}
            className="text-xl px-8 py-4 h-auto"
          >
            Ready for a Surprise? 🎁
          </Button>
        </div>
      </div>
    </div>
  );
};