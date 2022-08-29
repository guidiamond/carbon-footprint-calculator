import { Select } from "antd";
const { Option } = Select;

export const SelectOptions = ({ options, onChange }) => {
  return (
    <Select
      defaultValue={options[0]}
      style={{
        width: 120,
      }}
      disabled={options.length <= 1}
      onChange={onChange}
    >
      {options.map((opt, idx) => {
        return (
          <Option key={idx} value={opt.value}>
            {opt.title}
          </Option>
        );
      })}
    </Select>
  );
};
