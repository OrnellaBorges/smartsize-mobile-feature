import { useState } from "react";

type Option = {
  value?: string;
  label?: string;
  centimeter?: string;
  inch?: string;
};

type SelectTypesProps = {
  options: Option[];
  value: string;
  defaultValue: string;
};

export default function CustomSelect({
  options,
  value,
  defaultValue,
}: SelectTypesProps) {
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  return (
    <div className="select">
      <button onClick={() => setIsSelectOpen(!isSelectOpen)} className="btn">
        {defaultValue} <span>{isSelectOpen ? "▲" : "▼"}</span>
      </button>

      {isSelectOpen && (
        <ul className="selectFruits">
          {options.map((opt, optIndex) => (
            <li key={optIndex} className="option">
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
