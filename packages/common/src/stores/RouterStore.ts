import { observable } from "mobx";
import { createContext } from "react";

type Routes = 'WorkoutHistory' | 'CurrentWorkout'  //enables auto complete

class RouterStore {
  @observable screen: Routes = 'WorkoutHistory'
}

export const RouterStoreContext = createContext(new RouterStore());