import React from "react";
interface InputFormProps {
  text: string;
  handleSubmit: () => void;
  handleInput: (text: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({
  text,
  handleSubmit,
  handleInput,
}) => {
  return (
    <label>
      <input
        value={text}
        type="text"
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};

export default InputForm;
