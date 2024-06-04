import Countdown from 'react-countdown';
import './App.css'

function App() {
  // June 4, 2024 5:00 PM CDT
  const completionDate = new Date('June 4, 2024 17:00:00 GMT-0700')
  const Halp = () => <img src="/logo.png" alt="halp" width={80} style={{ display: "inline", padding: "0 2px 0", marginBottom: "-6px"}} />

  const HalpIsDead = () => <div>Yes, <Halp /> has died 😢</div>
  const HalpIsNotDead = () => <div>No, <Halp /> is not dead yet.</div>

  return (
    <>
      
      <div style={{ marginTop: '40px' }}> 
        <Countdown date={completionDate} renderer={({ hours, minutes, seconds, completed }) => {
          if (completed) {
            return <HalpIsDead />;
          } else {
            const hourMarker: string = hours > 0 ? `${hours} hours, ` : '';
            const minuteMarker = minutes > 0 ? `${minutes} minutes, ` : '';
            const secondMarker = `${seconds} seconds`;
            return (
              <>
                <HalpIsNotDead />
                <br />
                <div>{hourMarker} {minuteMarker} {secondMarker} until Halp is dead 💀</div>
              </>
            )
          }
        }
      }/>
    </div>
  </>
  )
}

export default App
