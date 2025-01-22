import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styles from '../../styles/Timer.module.css';

const Timer = ({ setShowTimer }) => {
    const targetTime = moment('2021-10-28 18:00'); // Replace this with your actual target time
    const [currentTime, setCurrentTime] = useState(moment());
    const [timeBetween, setTimeBetween] = useState(
        moment.duration(targetTime.diff(moment()))
    );

    useEffect(() => {
        const updateTimer = () => {
            const now = moment();
            const duration = moment.duration(targetTime.diff(now));

            if (duration.asMilliseconds() <= 0) {
                setShowTimer(false);
                clearInterval(interval);
            } else {
                setTimeBetween(duration);
            }
        };

        const interval = setInterval(() => {
            setCurrentTime(moment());
            updateTimer();
        }, 1000);

        return () => clearInterval(interval);
    }, [targetTime, setShowTimer]); // Dependencies include stable values

    return (
        <div className={styles.container}>
            <div className={styles.time_container}>
                <span>{timeBetween.days()}</span>
                <div>
                    <p>days</p>
                </div>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.time_container}>
                <span>{timeBetween.hours()}</span>
                <div>
                    <p>hours</p>
                </div>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.time_container}>
                <span>{timeBetween.minutes()}</span>
                <div>
                    <p>minutes</p>
                </div>
            </div>
            <div className={styles.vertical}></div>
            <div className={styles.time_container}>
                <span>{timeBetween.seconds()}</span>
                <div>
                    <p>seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Timer;
