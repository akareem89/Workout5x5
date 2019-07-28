import { createContext } from "vm";

type WorkoutDay = 'a' | 'b';

interface WorkoutHistory {
  [key: string]: Array<{
    excercise: string,
    value: number
  }>
}

/*
{
  '02-18-2019': [
    {
      exercise: 'squat',
      value: 90
    },
    {
      exercise: 'benchpress',
      value: 100
    }
  ]
}
*/

class WorkoutStore {
  currentSquat: number;
  currentBenchPress: number;
  currentOverheadPress: number;
  currentDeadlift: number;
  currentBarbellRow: number;

  lastWorkoutDay: WorkoutDay;

  history: WorkoutHistory
}

export const WorkoutStoreContext = createContext(new WorkoutStore());