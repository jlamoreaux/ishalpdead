import { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import './App.css';

function App() {
  const completionDate = new Date('June 4, 2024 17:00:00 GMT-0700');
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    let timeout: number;
    if (isRaining) {
      timeout = setTimeout(() => setIsRaining(false), 60000); // Stop raining after 1 minute
    }
    return () => clearTimeout(timeout);
  }, [isRaining]);

  const HalpLogo = () => <img src="/logo-cropped.png" alt="halp" width={24} style={{ display: "inline", padding: "0", marginBottom: "-6px" }} />;

  const HalpIsDead = () => <div>Yes, <HalpLogo /> <strong>Halp</strong> has died 😢</div>;
  const HalpIsNotDead = () => <div>No, <HalpLogo /> <strong>Halp</strong> is not dead yet.</div>;

  const startEmojiRain = () => {
    setIsRaining(true);
  };

  const stopEmojiRain = () => {
    setIsRaining(false);
  }

  return (
    <>
      <div style={{ marginTop: '40px' }}>
        <Countdown
          date={completionDate}
          renderer={({ hours, minutes, seconds, completed }) => {
            if (completed) {
              if(Date.now() < completionDate.getTime() + 60000) {
                startEmojiRain();
              } else {
                stopEmojiRain();
              }
              return <HalpIsDead />;
            } else {
              const hourMarker = hours > 0 ? `${hours} hours, ` : '';
              const minuteMarker = minutes > 0 ? `${minutes} minutes, ` : '';
              const secondMarker = `${seconds} seconds`;
              return (
                <>
                  <HalpIsNotDead />
                  <br />
                  <div>{hourMarker} {minuteMarker} {secondMarker} until Halp is dead 💀</div>
                </>
              );
            }
          }}
        />
      </div>
      {isRaining && <Rain />}
    </>
  );
}

const Rain = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const emoji = document.createElement('div');
      emoji.innerText = '😭';
      emoji.className = 'emoji';
      emoji.style.left = `${Math.random() * window.innerWidth}px`;
      emoji.style.fontSize = `${Math.random() * 20 + 10}px`; // Random size between 10px and 30px
      emoji.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random duration between 3s and 5s
      document.body.appendChild(emoji);
      setTimeout(() => document.body.removeChild(emoji), 5000); // Remove after 5 seconds
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default App;
