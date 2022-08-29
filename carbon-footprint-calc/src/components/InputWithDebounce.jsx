import { Input } from "antd";
import { useDebounce } from "../hooks/useDebounce";

export const SearchInput = (props) => {
  const { onChange, delayMs, ...inputProps } = props;
  const debouncedChange = useDebounce(onChange, delayMs);

  const handleChange = (e) => {
    debouncedChange(e.target.value);
  };

  return <Input onChange={handleChange} {...inputProps} />;
};
