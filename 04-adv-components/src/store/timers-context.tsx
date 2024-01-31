import { type ReactNode, createContext, useContext, useReducer } from 'react';

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};

const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
  const timersCtx = useContext(TimersContext);

  if (timersCtx === null) {
    throw new Error('Someting went wrong!');
  }

  return timersCtx;
}

type TimerContextProviderProps = {
  children: ReactNode;
};

export default function TimersContextProvider({
  children,
}: TimerContextProviderProps) {
  const [ctxState, dispatch] = useReducer(reducer, initialState);
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
