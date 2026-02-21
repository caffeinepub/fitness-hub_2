import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Card } from './ui/card';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isExpanded, setIsExpanded] = useState(false);

  // Load preferences from localStorage
  useEffect(() => {
    const savedMuted = localStorage.getItem('music-muted');
    const savedVolume = localStorage.getItem('music-volume');
    
    if (savedMuted !== null) {
      setIsMuted(savedMuted === 'true');
    }
    if (savedVolume !== null) {
      setVolume(parseFloat(savedVolume));
    }
  }, []);

  // Update audio element when volume or muted state changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    localStorage.setItem('music-muted', String(newMuted));
  };

  const handleVolumeChange = (values: number[]) => {
    const newVolume = values[0];
    setVolume(newVolume);
    localStorage.setItem('music-volume', String(newVolume));
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
      localStorage.setItem('music-muted', 'false');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="https://www.bensound.com/bensound-music/bensound-energy.mp3" type="audio/mpeg" />
      </audio>

      <Card className="bg-card/95 backdrop-blur border-2 border-border shadow-2xl">
        <div className="p-3">
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={togglePlay}
              className="h-10 w-10 hover:bg-accent-brand/10 hover:text-accent-brand"
              title={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={toggleMute}
              className="h-10 w-10 hover:bg-accent-brand/10 hover:text-accent-brand"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-10 w-10 hover:bg-accent-brand/10 hover:text-accent-brand"
              title="Volume control"
            >
              <span className="text-xs font-bold">♪</span>
            </Button>
          </div>

          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-border">
              <div className="flex items-center gap-3 px-2">
                <VolumeX className="h-4 w-4 text-muted-foreground" />
                <Slider
                  value={[volume]}
                  onValueChange={handleVolumeChange}
                  max={1}
                  step={0.01}
                  className="w-24"
                />
                <Volume2 className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Workout Music
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
