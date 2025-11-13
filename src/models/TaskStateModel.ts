import type { TTaskModel } from './TaskModel';

export type TTaskStateModel = {
  tasks: TTaskModel[];
  secondRemaining: number;
  formattedSecondRemaining: string;
  activeTask: TTaskModel | null;
  currentCycle: number; // 1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
