import { useEffect, useRef, useState } from 'react';
import {
  useTimersContext,
  type Timer as TimerProps,
} from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const [progress, setProgress] = useState(duration * 1000);
  const { isRunning } = useTimersContext();
  const intervalIdRef = useRef<number>();

  const updateProgress = () => {
    setProgress((prevProgress) => {
      const newProgress = prevProgress - 10;
      if (newProgress > 0) {
        return newProgress;
      } else {
        stopTimer();
        return 0;
      }
    });
  };

  const startTimer = () => {
    if (intervalIdRef.current === undefined) {
      intervalIdRef.current = window.setInterval(updateProgress, 10);
    }
  };

  const stopTimer = () => {
    if (intervalIdRef.current !== undefined) {
      window.clearInterval(intervalIdRef.current);
      intervalIdRef.current = undefined;
    }
  };

  useEffect(() => {
    if (isRunning) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => stopTimer();
  }, [isRunning]);

  const progressInSeconds = (progress / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress value={progress} max={duration * 1000} />
      </p>
      <p>
        <span>{progressInSeconds}</span>
      </p>
    </Container>
  );
}
