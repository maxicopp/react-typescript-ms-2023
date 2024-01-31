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

type StartTimerAction = {
  type: 'START_TIMER';
};

type StopTimerAction = {
  type: 'STOP_TIMER';
};

type AddTimerAction = {
  type: 'ADD_TIMER';
  payload: Timer;
};

type Action = StartTimerAction | StopTimerAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
  switch (action.type) {
    case 'ADD_TIMER':
      return {
        ...state,
        timers: action.payload ? [...state.timers, action.payload] : [],
      };
    case 'START_TIMER':
      return {
        ...state,
        isRunning: true,
      };
    case 'STOP_TIMER':
      return {
        ...state,
        isRunning: false,
      };
    default:
      return state;
  }
}

export default function TimersContextProvider({
  children,
}: TimerContextProviderProps) {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);

  const ctx: TimersContextValue = {
    isRunning: timersState.isRunning,
    timers: timersState.timers,
    addTimer: (timerData) => {
      dispatch({ type: 'ADD_TIMER', payload: timerData });
    },
    startTimer: () => {
      dispatch({ type: 'START_TIMER' });
    },
    stopTimer: () => {
      dispatch({ type: 'STOP_TIMER' });
    },
  };

  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
}
