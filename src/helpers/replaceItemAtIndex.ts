import { ITodoItem } from "../interfaces/ITodoItem";

export const replaceItemAtIndex = (
  array: ITodoItem[],
  index: number,
  newValue: ITodoItem
) => [...array.slice(0, index), newValue, ...array.slice(index + 1)];
