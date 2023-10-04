import React, { useState, useEffect } from 'react';

function CountdownTimer({ deadline }) {
    const calculateTimeRemaining = () => {
        const currentTime = new Date();
<<<<<<< HEAD
        const timeRemaining = Math.max(deadline - currentTime, 0); 
=======
        const timeRemaining = Math.max(deadline - currentTime, 0); // Ensure it doesn't go negative
>>>>>>> 68bfeb00f46a28731398e9db567e9a614410bfa2
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
<<<<<<< HEAD
     
=======
        // seconds = seconds < 10 ? "0" + seconds : seconds;
>>>>>>> 68bfeb00f46a28731398e9db567e9a614410bfa2
        
        return { days, hours, minutes, seconds };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timerInterval = setInterval(() => {
            const newTimeRemaining = calculateTimeRemaining();
            setTimeRemaining(newTimeRemaining);

            if (newTimeRemaining.days === 0 && newTimeRemaining.hours === 0 && newTimeRemaining.minutes === 0 && newTimeRemaining.seconds === 0) {
                clearInterval(timerInterval);
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    return (
        <div className="countdown-timer">
            <p className='timerTitle'> מבצע סוכות!! כל השרשראות מלבד פנינים עד 130 ש"ח</p>
            <div className="time">
                <div style={{margin:'2px'}}> <p className='timerP1'>{timeRemaining.days<10?`0${timeRemaining.days}`:timeRemaining.days}</p>
                       <p className='timerP2'>ימים</p> 
                </div> 
                <div><p style={{fontSize:'15px',marginTop:'0px'}}>:</p></div>
                 <div style={{margin:'2px'}}> <p className='timerP1'>{timeRemaining.hours<10?`0${timeRemaining.hours}`:timeRemaining.hours}</p>
                       <p className='timerP2'>שעות</p> 
                </div> 
                <div><p style={{fontSize:'15px',marginTop:'0px'}}>:</p></div>
                 <div style={{margin:'2px'}}> <p className='timerP1'>{timeRemaining.minutes<10?`0${timeRemaining.minutes}`:timeRemaining.minutes}</p>
                       <p className='timerP2'>דקות</p> 
                </div> 
                <div><p style={{fontSize:'15px',marginTop:'0px'}}>:</p></div>
                 <div style={{margin:'2px'}}> <p className='timerP1'>{timeRemaining.seconds<10?`0${timeRemaining.seconds}`:timeRemaining.seconds}</p>
                       <p className='timerP2'>שניות</p> 
                </div>
               
            </div>
      
        </div>
    );
}

export default CountdownTimer;
