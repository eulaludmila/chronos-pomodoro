import type { TTaskStateModel } from './TaskStateModel';

export type TTaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null;
  interruptDate: number | null;
  type: keyof TTaskStateModel['config'];
};
