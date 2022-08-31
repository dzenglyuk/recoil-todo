import type { FC } from "react";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../state/todoList";
import TodoListFilters from "../TodoListFilters";
import TodoItemCreator from "../TodoItemCreator";
import TodoItem from "../TodoItem";
import TodoListStats from "../TodoListStats";

const TodoList: FC = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <div>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </div>
    </div>
  );
};

export default memo(TodoList);
