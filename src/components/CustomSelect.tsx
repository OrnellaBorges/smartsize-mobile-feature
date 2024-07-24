type Option = {
  value: string;
  label: string;
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
  return (
    <label className="label" htmlFor="">
      Options
      <select
        defaultValue={defaultValue}
        className="select"
        name="selectedFruit"
        value={value}
      >
        {options.map((opt, optIndex) => (
          <option key={optIndex} value={opt.value} className="option">
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
