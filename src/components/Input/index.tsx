import { Input } from './styles';

type InputProps = {
  placeholder: string;
  name: string;
  ariaLabel: string;
  type: string;
};

export function CustomInput({
  ariaLabel,
  name,
  type,
  placeholder,
}: InputProps) {
  return (
    <Input
      placeholder={placeholder}
      name={name}
      aria-label={ariaLabel}
      type={type}
    />
  );
}
