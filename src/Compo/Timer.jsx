import React, { useState, useEffect } from 'react';

function CountdownTimer({ deadline }) {
    const calculateTimeRemaining = () => {
        const currentTime = new Date();
        const timeRemaining = Math.max(deadline - currentTime, 0); // Ensure it doesn't go negative
        const seconds = Math.floor((timeRemaining / 1000) % 60);
        const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
        const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        // seconds = seconds < 10 ? "0" + seconds : seconds;
        
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
            <h1 style={{ marginBottom:'5px',marginTop:'0px', fontSize: '15px' }}> מבצע סוכות!! כל השרשראות מלבד פנינים עד 130 ש"ח</h1>
            <div className="time">
                <span style={{ margin: '5px' }}>{timeRemaining.days}d</span>/
                <span>{timeRemaining.hours<10?`0${timeRemaining.hours}`:timeRemaining.hours}:</span>
                <span>{timeRemaining.minutes<10?`0${timeRemaining.minutes}`:timeRemaining.minutes}:</span>
                <span>{timeRemaining.seconds<10?`0${timeRemaining.seconds}`:timeRemaining.seconds}</span>
            </div>
        </div>
    );
}

export default CountdownTimer;
