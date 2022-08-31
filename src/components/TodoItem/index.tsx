import type { ChangeEventHandler, FC } from "react";
import { memo } from "react";
import { useRecoilState } from "recoil";
import { replaceItemAtIndex } from "../../helpers/replaceItemAtIndex";
import { ITodoItem } from "../../interfaces/ITodoItem";
import { todoListState } from "../../state/todoList";

interface IProps {
  item: ITodoItem;
}

const TodoItem: FC<IProps> = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const editItemText: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      value,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((todoItem) => todoItem.id !== item.id);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.value} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default memo(TodoItem);
