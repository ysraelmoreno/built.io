import {
  FocusEvent,
  InputHTMLAttributes,
  useState,
  MouseEvent,
  useRef,
  useEffect,
} from "react";
import { IconBaseProps } from "react-icons";
import { InputContainer, InputWrapper, InputLabel } from "./styles";

type InputProps = {
  icon?: React.ComponentType<IconBaseProps>;
  floatingLabel?: boolean;
  variant?: "primary" | "alternative";
} & InputHTMLAttributes<HTMLInputElement>;

function Input({
  placeholder,
  floatingLabel = true,
  icon: Icon,
  variant = "primary",
  defaultValue,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = (e: MouseEvent<HTMLLabelElement>) => {
    const verifyFocus = !isFocused;

    verifyFocus ? inputRef.current?.focus() : inputRef.current?.blur();

    setIsFocused(verifyFocus);
  };

  const handleFocus = (ev: FocusEvent<HTMLInputElement>) => {
    setIsFocused(!isFocused);

    setIsFilled(!!ev.target.value);
  };

  useEffect(() => {
    if (defaultValue) {
      setIsFilled(true);
    }
  }, []);

  return (
    <InputContainer variant={variant}>
      <InputLabel
        floatingLabel={floatingLabel}
        onClick={handleInputFocus}
        isFilled={isFilled}
        isFocused={isFocused}
        variant={variant}
      >
        {Icon && <Icon />}
        {placeholder}
      </InputLabel>
      <InputWrapper
        ref={inputRef}
        defaultValue={defaultValue}
        onFocus={handleFocus}
        onBlur={handleFocus}
        type="text"
        {...props}
      />
    </InputContainer>
  );
}

export default Input;
