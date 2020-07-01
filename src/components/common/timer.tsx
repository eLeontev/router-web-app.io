import React, { useEffect, useState, useMemo } from 'react';
import './timer.scss';

export type TimerProps = {
    duration: number;
    fallback: () => void;
};

const tickDuration = 1000;

const getFormattedRestTime = (resTime: number): string => {
    const min = Math.floor(resTime / 60);
    const sec = resTime % 60;

    return `0${min}: ${sec > 9 ? sec : `0${sec}`}`;
};

export const Timer = ({ duration, fallback }: TimerProps) => {
    const [restTime, setRestTime] = useState(duration);

    useEffect(() => {
        const timerId = setTimeout(fallback, duration * tickDuration);
        return () => clearTimeout(timerId);
    }, [fallback, duration]);

    useEffect(() => {
        const timerId = setInterval(() => {
            setRestTime((restTime) => restTime - 1);
        }, tickDuration);
        return () => clearInterval(timerId);
    }, []);

    const formattedRestTime = useMemo(() => getFormattedRestTime(restTime), [
        restTime,
    ]);

    return (
        <section className="timer">
            <h3 className="duration">{formattedRestTime}</h3>
            <section className="progress-bar">
                <p className="progress-bar_rest"></p>
            </section>
        </section>
    );
};
