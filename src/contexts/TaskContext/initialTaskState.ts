import type { TTaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TTaskStateModel = {
  tasks: [],
  secondRemaining: 0,
  activeTask: null,
  formattedSecondRemaining: '00:00',
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};
