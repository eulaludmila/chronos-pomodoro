import { createContext } from 'react';
import type { TTaskStateModel } from '../../models/TaskStateModel';
import { initialTaskState } from './initialTaskState';

type TTaskContextProps = {
  state: TTaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TTaskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext =
  createContext<TTaskContextProps>(initialContextValue);
