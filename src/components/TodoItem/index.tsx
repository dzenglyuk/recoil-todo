import { ChangeEventHandler, FC, useState } from "react";
import { memo } from "react";
import { useRecoilState } from "recoil";
import { Input, Button, Typography } from "antd";
import { replaceItemAtIndex } from "../../helpers/replaceItemAtIndex";
import { ITodoItem } from "../../interfaces/ITodoItem";
import { todoListState } from "../../state/todoList";
import { styles } from "./styles";
interface IProps {
  item: ITodoItem;
}

const TodoItem: FC<IProps> = ({ item }) => {
  const [editModeOn, setEditModeOn] = useState<boolean>(false);
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleEditMode = () => {
    setEditModeOn((editModeOn) => !editModeOn);
  };

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
    <div style={styles.todoItemContainer}>
      {editModeOn ? (
        <Input
          value={item.value}
          onChange={editItemText}
          placeholder={"Type..."}
        />
      ) : (
        <Typography.Title
          level={5}
          style={styles.input}
          delete={item.isComplete}
          onClick={toggleItemCompletion}
        >
          {item.value}
        </Typography.Title>
      )}

      <Button onClick={toggleEditMode} type="link">
        {editModeOn ? "Save" : "Edit"}
      </Button>
      <Button onClick={deleteItem} type="primary" danger>
        X
      </Button>
    </div>
  );
};

export default memo(TodoItem);
