// Antd
import { Input, Space, Tooltip } from 'antd';
// Icons
import { InfoCircleOutlined } from '@ant-design/icons';
// Styles
import './styles/styles.css';

interface NumericInputProps {
  value: string;
  onChange: (value: string) => void;
}

const NumericInput = (props: NumericInputProps) => {
  const { value, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };

  return (
    <Space.Compact
      className='numeric-input'
    >
      <Input
        {...props}
        addonBefore='km'
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Ingrese distancia (km)"
        maxLength={16}
      />
      <Tooltip title="Ingrese distancia en kilómetros">
        <InfoCircleOutlined />
      </Tooltip>
    </Space.Compact>
  );
};

export default NumericInput;