import { type ReactNode, createContext } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

type TimerContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimerContextProviderProps) {
  const ctx: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimer: () => {},
    startTimer: () => {},
    stopTimer: () => {},
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
