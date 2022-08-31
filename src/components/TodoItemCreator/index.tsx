import { FC, ChangeEventHandler } from "react";
import { memo, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Input, Button } from "antd";
import { todoListState } from "../../state/todoList";
import { generateId } from "../../utils/generateId";
import { styles } from "./styles";

const TodoItemCreator: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    inputValue &&
      setTodoList((todoList) => [
        ...todoList,
        {
          id: generateId(),
          value: inputValue,
          isComplete: false,
        },
      ]);
    setInputValue("");
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setInputValue(value);
  };

  return (
    <div style={styles.container}>
      <Input
        value={inputValue}
        onChange={handleChange}
        style={styles.input}
        placeholder={"Start typing..."}
      />
      <Button onClick={addItem} type="primary">
        Add
      </Button>
    </div>
  );
};

export default memo(TodoItemCreator);
