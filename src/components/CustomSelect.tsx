import { useState } from "react";

type Option = {
  value: string;
  label: string;
};

type SelectTypesProps = {
  options: Option[];
  value: string;
  defaultValue: string;
  onChangeSelect: React.Dispatch<React.SetStateAction<string>>;
};

export default function CustomSelect({
  options,
  value,
  defaultValue,
  onChangeSelect,
}: SelectTypesProps) {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const handleOptionClick = (value: string) => {
    console.log("select value:", value);
    onChangeSelect(value);
    setIsSelectOpen(!isSelectOpen);
  };

  return (
    <div className="select">
      <button onClick={() => setIsSelectOpen(!isSelectOpen)} className="btn">
        {defaultValue} <span>{isSelectOpen ? "▲" : "▼"}</span>
      </button>

      {isSelectOpen && (
        <ul className="selectFruits">
          {options.map((opt, optIndex) => (
            <li
              key={optIndex}
              className="option"
              onClick={() => handleOptionClick(opt.label)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
