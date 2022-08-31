import type { FC } from "react";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../../state/todoList";
import TodoListFilters from "../TodoListFilters";
import TodoItemCreator from "../TodoItemCreator";
import TodoItem from "../TodoItem";
import TodoListStats from "../TodoListStats";
import { styles } from "./styles";
import { Divider } from "antd";

const TodoList: FC = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div style={styles.outerContainer}>
      <div style={styles.todoListContainer}>
        <div style={styles.todoListHeader}>
          <TodoListStats />
          <TodoListFilters />
        </div>
        <Divider />
        <TodoItemCreator />
        <div>
          {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(TodoList);
