import { atom, selector } from "recoil";
import { StateAtom } from "../enums/stateAtom";
import { TodoFilter } from "../enums/todoFilter";
import { ITodoItem } from "../interfaces/ITodoItem";

export const todoListState = atom({
  key: StateAtom.TODO_LIST,
  default: [] as ITodoItem[],
});

export const todoListFilterState = atom({
  key: StateAtom.TODO_LIST_FILTER,
  default: TodoFilter.SHOW_ALL,
});

export const filteredTodoListState = selector({
  key: StateAtom.FILTERED_TODO_LIST,
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case TodoFilter.SHOW_COMPLETED:
        return list.filter((item) => item.isComplete);
      case TodoFilter.SHOW_UNCOMPLETED:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: StateAtom.TODO_LIST_STATS,
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = Math.round(
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100
    );

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
